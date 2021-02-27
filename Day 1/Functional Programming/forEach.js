const countries = ['Finland', 'Estonia', 'Sweden', 'Norway']
countries.forEach(
    function (country, index, arr) {
        console.log(index, country.toUpperCase())
    }
)