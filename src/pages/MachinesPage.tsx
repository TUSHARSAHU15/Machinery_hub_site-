import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { MachineCard } from '../components/MachineCard';
import { IMAGES, CATEGORIES, MACHINES } from '../data/machinery';

const selectClass =
  'w-full rounded-md border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-primary text-foreground';

export const MachinesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';

  const [searchQuery, setSearchQuery] = useState('');
  const [conditionFilter, setConditionFilter] = useState('all');
  const [capacityFilter, setCapacityFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [availabilityFilter, setAvailabilityFilter] = useState('all');

  const filteredMachines = useMemo(() => {
    return MACHINES.filter((m) => {
      // Category filter
      if (categoryParam !== 'all' && m.category !== categoryParam) {
        return false;
      }

      // Search query (name or model)
      if (
        searchQuery &&
        !`${m.name} ${m.model}`.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Condition filter
      if (conditionFilter !== 'all' && m.condition !== conditionFilter) {
        return false;
      }

      // Availability filter
      if (availabilityFilter === 'in' && !m.available) {
        return false;
      }

      // Capacity filter
      if (capacityFilter === 'low' && m.capacityValue >= 5000) {
        return false;
      }
      if (capacityFilter === 'high' && m.capacityValue < 5000) {
        return false;
      }

      // Price filter
      if (priceFilter === 'quote' && m.price != null) {
        return false;
      }
      if (priceFilter === 'u20' && (m.price == null || m.price > 2000000)) {
        return false;
      }
      if (priceFilter === 'o20' && (m.price == null || m.price <= 2000000)) {
        return false;
      }

      return true;
    });
  }, [
    categoryParam,
    searchQuery,
    conditionFilter,
    capacityFilter,
    priceFilter,
    availabilityFilter,
  ]);

  const handleCategoryChange = (val: string) => {
    if (val === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      searchParams.set('category', val);
      setSearchParams(searchParams);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Machinery Catalogue"
        title="Find the right machine"
        subtitle="New and quality-checked used machinery for printing, notebook and paper industries."
        image={IMAGES.offset}
      />

      <section className="container-x py-12">
        {/* Floating Filter Card */}
        <div className="-mt-20 relative z-10 rounded-xl border border-border bg-card p-5 shadow-card">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search machines by name or model…"
              className={`${selectClass} pl-9`}
            />
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {/* Category Select */}
            <select
              value={categoryParam}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className={selectClass}
            >
              <option value="all">All machine types</option>
              {CATEGORIES.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.short}
                </option>
              ))}
            </select>

            {/* Capacity Select */}
            <select
              value={capacityFilter}
              onChange={(e) => setCapacityFilter(e.target.value)}
              className={selectClass}
            >
              <option value="all">Any capacity</option>
              <option value="low">Up to 5,000 / hr</option>
              <option value="high">5,000+ / hr</option>
            </select>

            {/* Price Select */}
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className={selectClass}
            >
              <option value="all">Any price</option>
              <option value="u20">Under NPR 20 Lakh</option>
              <option value="o20">Above NPR 20 Lakh</option>
              <option value="quote">Quote on request</option>
            </select>

            {/* Condition Select */}
            <select
              value={conditionFilter}
              onChange={(e) => setConditionFilter(e.target.value)}
              className={selectClass}
            >
              <option value="all">New & Used</option>
              <option value="New">New</option>
              <option value="Used">Used</option>
            </select>

            {/* Availability Select */}
            <select
              value={availabilityFilter}
              onChange={(e) => setAvailabilityFilter(e.target.value)}
              className={selectClass}
            >
              <option value="all">Any availability</option>
              <option value="in">In stock only</option>
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
          <SlidersHorizontal className="h-4 w-4" />
          {filteredMachines.length} machine{filteredMachines.length !== 1 && 's'} found
        </p>

        {/* Machines Grid */}
        <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredMachines.map((m) => (
            <MachineCard key={m.slug} m={m} />
          ))}
        </div>

        {/* Empty State */}
        {filteredMachines.length === 0 && (
          <p className="py-20 text-center text-muted-foreground">
            No machines match these filters. Try widening your search or send us an enquiry.
          </p>
        )}
      </section>
    </>
  );
};
