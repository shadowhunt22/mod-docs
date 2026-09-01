---
outline: deep
title: Realistic Campfires
---

<ImageComponent 
    :projectName="'Realistic Campfires'"
    :imageUrl="'https://cdn.modrinth.com/data/ZEMQmiVU/e6bd19f8b0ec6c0a8cebb0557cc3837b81c000fc.png'" 
/>

## Configuration: Customizing the Properties and How You Maintain Campfires

This mod takes advantage of the game having a data driven system, which gives you the ability to customize how this mod functions.  The values that are applied are dependent on pack load order, which means packs on top will override lower packs.  You can create your own custom data pack to modify the following properties:

### Time

`info`: How much time it takes until the fire extinguishes

`json`:

- `minutes`: int
- `seconds`: int

`default`: 

```json
{
    "minutes": 5,
    "seconds": 0
}
```

### Ignition Items

`info`: Items that can ignite the campfire and how much power they emit when doing so.

`json`: 
- `replace`: (boolean, optional). When `true`, completely wipes all ignition items loaded from lower-priority data packs.
- `values`: (object, required). Key-value pairs of item ids and their ignition power values.

`default`:

```json
{
    "replace": false,
    "values": {
        "minecraft:stick": 1
    }
}
```

### Ignition Threshold

`info`: This dictates how much power is required until the campfire ignites.  When valid ignition items are used (like sticks or a flint and steel), this power is added to the campfire, and if the current total power is equal to or crosses this threshold, the campfire ignites on fire.  Items are consumed (if they are stackable) or damaged (if they are a tool). 

`json`:

- `threshold`: int

`default`:

```json
{
    "threshold": 4
}
```

## Creating the Datapack

To start modifying how this mod works, make a datapack with the following folder structure: `data/<namespace>/campfire/`.

### Time

To modify the default time it takes for a campfire to extinguish:

1. Make a folder named `time` and place it in the `campfire` directory of your datapack.
2. Make a file named `time.json` and place it in the `time` directory with the following content:

```json
{
	"minutes": int, // optional. This will default to 5 if not present.
	"seconds": int // optional. This will default to 0 if not present. 
}
```

> [!NOTE]
> If both `minutes` and `seconds` have a value of 0, the time until the campfire extinguishes will default back to five minutes.  If none of these values are present, then the game will still default to `5 minutes`.

### Ignition Items

To modify the items that can ignite the campfire and the power they have in doing so: 

1. Make a folder named `ignition` with a subdirectory named `items` and place them in the `campfire` directory of your datapack.
2. Make a file named `items.json` and place it in the `ignition/items/` directory with the following content:

```json
{
    "values": {
        "minecraft:stick": 1,
        "minecraft:torch": 2,
        "minecraft:netherite_hoe": 4
    }
}
```

> [!NOTE]
> Flint and Steel cannot be removed from the list of ignition items.  It will light the campfire everytime as it does not operate off of the ignition power system.

### Ignition Threshold

To modify the ignition threshold it takes for the campfire to be ignited:

1. Make a folder named `threshold` and place it in the `campfire/ignition` directory of your datapack.
2. Make a file named `threshold.json` and place it in the `ignition` directory with the following content:

```json
{
    // you could set it to 1,000,000. you really could.
    // but at that point, I would think you are playing ultra hardcore.
    "threshold": 12
}
```