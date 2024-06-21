
roastTypes = [
    {
        "id": 1,
        "name": "Light"
    },
    {
        "id": 2,
        "name": "Medium"
    },
    {
        "id": 3,
        "name": "Dark"
    },
    {
        "id": 4,
        "name": "Espresso"
    }
]

brands = [
    {
        "id": 1,
        "name": "Black Rifle Coffee"
    },
    {
        "id": 2,
        "name": "Purity Coffee"
    }
]

coffee = [
    {
        "id": 1,
        "name": "Flow",
        "description": "most popular",
        "brand": 2,
        "roastType": 2
    },
    {
        "id": 2,
        "name": "Calm",
        "description": "for those who are stressed",
        "brand": 2,
        "roastType": 3
    },
    {
        "id": 1,
        "name": "Gunship",
        "description": "for those who like a caffeine buzz",
        "brand": 1,
        "roastType": 1
    },
]

module.exports = {
    coffee, brands, roastTypes
}