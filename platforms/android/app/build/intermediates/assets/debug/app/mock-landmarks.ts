import { Landmark } from './landmark';

export const LANDMARKS: Landmark[] = [
    {
        id: 0,
        name: "Pickup Truck",
        description: "Marvel at more than 2,000 natural rock arches at this park just outside of Moab. " +
            "Some of the formations can be spotted from the road, but the best require a scenic hike. " +
            "Don’t miss the famous Delicate Arch (3 miles round-trip) or the 7-mile (round-trip) Devils Garden Loop." +
            "\n\n" +
            "The Park Avenue Trail is the most popular hike in the park because of its ease and scenery at just " +
            "2 miles round trip. Or try the more challenging hike to Delicate Arches at 3.2 miles round trip." ,
        image: "~/images/pickup_truck.jpg",
        location: "Utah",
        likes: 245,
        comments: 23
    },
    {
        id: 1,
        name: "One Ton Truck",
        description: "Nicknamed the \"Crown of the Continent,\" Glacier National Park sits in the northwest corner of " +
            "Montana. Glacier National Park is just a scenic day’s drive north from Yellowstone." +
            "\n\n" +
            "Hit the trail to explore places like Fishercap Lake (pictured), which is a great place to spot a moose. " +
            "From Many Glacier Campground, go to the Swiftcurrent Motor Inn parking lot. The trailhead is on the west end. " +
            "You'll find the lake less than a mile down the trail. Continue 1.5 miles to Redrock Lake and take a spur to Redrock Falls." ,
        image: "~/images/one_ton_truck.jpg",
        location: "Montana",
        likes: 152,
        comments: 16
    },
    {
        id: 2,
        name: "Four Ton Truck",
        description:
            "Just 15 miles south of Moab, hike your way through 337, 598 acres of dramatic red-rock " +
            "landscape in Canyonlands NP, and do it all without having to compete for room on the trail - Canyonlands " +
            "is both Utah’s largest and least visited park." +
            "\n\n" +
            "The river-carved park boasts 360-degree views of rust-colored arches, buttes, and cliffs - but because " +
            "of the high-desert rock environment, its climate is subject to extreme temperature fluctuations. " +
            "Skip packing the parka, and go in the spring or fall for the most moderate, and most forgiving, weather." ,
        image: "~/images/four_ton_truck.jpg",
        location: "Utah",
        likes: 385,
        comments: 31
    }
]