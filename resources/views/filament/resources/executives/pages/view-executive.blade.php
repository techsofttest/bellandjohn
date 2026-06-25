<x-filament::page>
    <div class="space-y-6">
        <div class="grid gap-4 md:grid-cols-4">
            <x-filament::section>
                <div class="text-sm text-gray-500">Name</div>
                <div class="text-xl font-semibold">{{ $this->record->name }}</div>
            </x-filament::section>
            <x-filament::section>
                <div class="text-sm text-gray-500">Email</div>
                <div class="text-xl font-semibold">{{ $this->record->email }}</div>
            </x-filament::section>
            <x-filament::section>
                <div class="text-sm text-gray-500">Phone</div>
                <div class="text-xl font-semibold">{{ $this->record->phone ?: 'N/A' }}</div>
            </x-filament::section>
            <x-filament::section>
                <div class="text-sm text-gray-500">Status</div>
                <div class="text-xl font-semibold">{{ $this->record->is_active ? 'Active' : 'Inactive' }}</div>
            </x-filament::section>
        </div>

        <div class="grid gap-4 md:grid-cols-3">
            <x-filament::section>
                <div class="text-sm text-gray-500">Assigned Customers</div>
                <div class="text-2xl font-bold">{{ $this->assignedCustomersCount() }}</div>
            </x-filament::section>
            <x-filament::section>
                <div class="text-sm text-gray-500">Assigned Enquiries</div>
                <div class="text-2xl font-bold">{{ $this->assignedEnquiriesCount() }}</div>
            </x-filament::section>
            <x-filament::section>
                <div class="text-sm text-gray-500">New Enquiries This Month</div>
                <div class="text-2xl font-bold">{{ $this->newEnquiriesThisMonthCount() }}</div>
            </x-filament::section>
        </div>

        <x-filament::section>
            <x-slot name="heading">Assigned Customer Emails</x-slot>
            <div class="overflow-x-auto">
                <table class="w-full text-sm">
                    <thead>
                        <tr class="text-left">
                            <th class="py-2">Customer Email</th>
                            <th class="py-2">Total Enquiries</th>
                            <th class="py-2">Latest Enquiry Date</th>
                            <th class="py-2">Assigned Date</th>
                            <th class="py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($this->record->assignments as $assignment)
                            @php($enquiries = $this->relatedEnquiries($assignment->customer_email))
                            <tr class="border-t">
                                <td class="py-3">{{ $assignment->customer_email }}</td>
                                <td class="py-3">{{ $enquiries->count() }}</td>
                                <td class="py-3">{{ optional($enquiries->first()?->placed_at)->format('d-M-Y') ?? 'N/A' }}</td>
                                <td class="py-3">{{ optional($assignment->created_at)->format('d-M-Y') }}</td>
                                <td class="py-3">
                                    <div class="flex gap-3">
                                        <a class="text-primary-600" href="#" wire:click.prevent="$dispatch('open-modal', { id: 'related-enquiries-{{ $assignment->id }}' })">View Related Enquiries</a>
                                        <a class="text-warning-600" href="#" wire:click.prevent="$dispatch('open-modal', { id: 'reassign-{{ $assignment->id }}' })">Reassign Executive</a>
                                        <a class="text-danger-600" href="#" wire:click.prevent="$dispatch('open-modal', { id: 'remove-{{ $assignment->id }}' })">Remove Assignment</a>
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </x-filament::section>
    </div>
</x-filament::page>
