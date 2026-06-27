<?php

namespace App\Filament\Resources\Executives\Pages;

use App\Filament\Resources\Executives\ExecutiveResource;
use App\Models\EnquiryExecutiveAssignment;
use App\Models\Executive;
use App\Models\Order;
use Filament\Actions\Action;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\ViewRecord;

class ViewExecutive extends ViewRecord
{
    protected static string $resource = ExecutiveResource::class;

    protected string $view = 'filament.resources.executives.pages.view-executive';

    public function getTitle(): string
    {
        return $this->record->name;
    }

    protected function getHeaderActions(): array
    {
        return [
            Action::make('edit')->url(fn () => static::getResource()::getUrl('edit', ['record' => $this->record])),
            DeleteAction::make(),
        ];
    }

    public function assignments()
    {
        return EnquiryExecutiveAssignment::query()
            ->where('executive_id', $this->record->id)
            ->orderBy('customer_email');
    }

    public function assignedCustomersCount(): int
    {
        return $this->record->assignments()->count();
    }

    public function assignedEnquiriesCount(): int
    {
        return $this->record->enquiries()->count();
    }

    public function newEnquiriesThisMonthCount(): int
    {
        return $this->record->enquiries()->whereMonth('created_at', now()->month)->whereYear('created_at', now()->year)->count();
    }

    public function relatedEnquiries(string $email)
    {
        return Order::query()
            ->where('customer_email', $email)
            ->orderByDesc('placed_at')
            ->get();
    }

    public function reassignAssignment(int $assignmentId, int $newExecutiveId): void
    {
        $assignment = EnquiryExecutiveAssignment::findOrFail($assignmentId);
        $assignment->update(['executive_id' => $newExecutiveId]);
        Order::where('customer_email', $assignment->customer_email)
            ->update(['executive_id' => $newExecutiveId]);
    }

    public function removeAssignment(int $assignmentId): void
    {
        $assignment = EnquiryExecutiveAssignment::findOrFail($assignmentId);
        Order::where('customer_email', $assignment->customer_email)
            ->update(['executive_id' => null]);
        $assignment->delete();
    }
}
