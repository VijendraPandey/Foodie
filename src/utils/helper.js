//filters restaurant based upon the search text
export function filterData(searchInput, filteredRestaurants) {
    const filterData = filteredRestaurants.filter((restaurants) =>
      restaurants?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    );
    return filterData;
  }