//filters restaurant based upon the search text
export function filterData(searchInput, allRestaurants) {
  return allRestaurants.filter((restaurant) =>
    restaurant?.card?.card?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
}
