import React, { useMemo, useEffect, useRef } from 'react';
import { Search, ExternalLink } from 'lucide-react';

export interface SearchableSelectProps<T> {
  label: string;
  value: string;
  searchValue: string;
  setSearchValue: (value: string) => void;
  showDropdown: boolean;
  setShowDropdown: (show: boolean) => void;
  items: T[];
  onSelect: (id: string) => void;
  renderItem: (item: T) => React.ReactNode;
  editUrl?: string;
  error?: string;
}

export function SearchableSelect<T extends { id: string; name: string }>(
  props: SearchableSelectProps<T>
) {
  const {
    label,
    value,
    searchValue,
    setSearchValue,
    showDropdown,
    setShowDropdown,
    items,
    onSelect,
    renderItem,
    editUrl,
    error
  } = props;

  const dropdownRef = useRef<HTMLDivElement>(null);
  const selectedItem = useMemo(() => {
  return items.find((i) => i.id === value) || null;
}, [items, value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        // Close dropdown and clear text
        setShowDropdown(false);
        setSearchValue('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef, setShowDropdown, setSearchValue]);


  return (
    <div ref={dropdownRef} className="relative searchable-select w-full">
      <label className="block text-sm font-semibold text-blue-900 mb-1">
        {label}
      </label>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-400" />
        <input
          type="text"
          value={searchValue !== '' ? searchValue : selectedItem?.name || ''}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowDropdown(true)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              if (items.length > 0) {
                const selected = items[0];
                onSelect(selected.id);
                setSearchValue(`${selected.name}`);
                setShowDropdown(false);
              }
            }
          }}
          className={`w-full px-3 py-2 pl-10 pr-10 text-sm border rounded-lg
            ${error
              ? 'border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-200'
              : 'border-blue-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
            }
            text-blue-900 font-medium focus:outline-none transition-all`}
          placeholder={`Search ${label.toLowerCase()}...`}
        />

        {value && editUrl && (
          <a
            href={editUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-600"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      {showDropdown && (
        <div
          className="absolute z-[9999] w-full bottom-full mb-1 bg-white border border-blue-300 rounded-lg shadow-lg overflow-y-auto"
          style={{ maxHeight: '7.5rem' }}
        >
          {items.length > 0 ? (
            items.map((item) => (
              <div
                key={item.id}
                onMouseDown={(e) => {
                  e.preventDefault();
                  onSelect(item.id);
                  setSearchValue(`${item.name}`);
                  setShowDropdown(false);
                }}
                className="px-4 py-2 text-sm text-blue-900 hover:bg-blue-100 cursor-pointer border-b border-blue-100 last:border-b-0 transition-all"
              >
                {renderItem(item)}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-sm text-gray-500 text-center">
              {searchValue ? 'No results found' : 'No data available'}
            </div>
          )}
        </div>
      )}

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
