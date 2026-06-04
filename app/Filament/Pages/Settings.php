<?php

namespace App\Filament\Pages;

use App\Models\Setting;
use Filament\Forms\Components\FileUpload;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;
use Filament\Schemas\Components\Form;
use Filament\Schemas\Components\EmbeddedSchema;
use Filament\Schemas\Components\Actions;
use Filament\Pages\Page;
use Filament\Actions\Action;
use Filament\Notifications\Notification;

class Settings extends Page
{
    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-cog-6-tooth';

    protected static string | \UnitEnum | null $navigationGroup = 'Content Management';

    protected static ?string $title = 'General Settings';

    public ?array $data = [];

    public function mount(): void
    {
        $this->form->fill([
            'logo' => Setting::getValue('logo'),
            'map_code' => Setting::getValue('map_code'),
        ]);
    }

    public function form(Schema $schema): Schema
    {
        return $schema
            ->schema([
                Section::make('Website Logo')
                    ->schema([
                        FileUpload::make('logo')
                            ->image()
                            ->directory('logo')
                            ->visibility('public')
                            ->required()
                            ->label('Upload Logo')
                            ->helperText('Please upload the site logo (PNG/SVG/WebP format recommended)'),
                    ]),
                Section::make('Google Maps Integration')
                    ->schema([
                        Textarea::make('map_code')
                            ->label('Google Maps Embed URL / Code')
                            ->helperText('Paste the URL inside the src="" parameter of the Google Maps embed iframe.')
                            ->rows(4)
                            ->required(),
                    ]),
            ])
            ->statePath('data');
    }

    public function content(Schema $schema): Schema
    {
        return $schema
            ->components([
                Form::make([EmbeddedSchema::make('form')])
                    ->id('form')
                    ->livewireSubmitHandler('save')
                    ->footer([
                        Actions::make($this->getFormActions())
                            ->alignment('start')
                            ->key('form-actions'),
                    ]),
            ]);
    }

    protected function getFormActions(): array
    {
        return [
            Action::make('save')
                ->label(__('filament-panels::resources/pages/edit-record.form.actions.save.label'))
                ->submit('save'),
        ];
    }

    public function save(): void
    {
        $data = $this->form->getState();

        Setting::setValue('logo', $data['logo']);
        Setting::setValue('map_code', $data['map_code']);

        Notification::make()
            ->success()
            ->title('Settings saved successfully!')
            ->send();
    }
}
