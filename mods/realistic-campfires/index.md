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

### Placeables

`info`: Blocks that can be placed on the campfire.  It is important to note that the textures for these blocks are to be provided in addition to adding their id to the datapack.  See [Placeables](#Placeables-1) to learn the different model types that can be specified and how to create textures for each of them

`json`:
- `replace`: (boolean, optional). When `true`, completely wipes all placeables loaded from lower-priority data packs.
- `values`: (object, required). Key-value pairs of block ids and a json object containing the model type to use when rendering the placeable in the campfire.

`example`:

```json
{
    "values": {
        "modid:custom_log": {
            "model": "log"
        }
    }
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

### Placeables

To modify or add blocks that can be placed onto the campfire:

1. Make a folder named `item` with a subdirectory named `placeables` and place them in the `campfire` directory of your datapack.
2. Make a file named `placeables.json` and place it in the `item/placeables/` directory with the following content:

```json
{
    "values": {
        "minecraft:coal_block": {
            "model": "cube_all"
        },
        "minecraft:basalt": {
            "model": "multi_face"
        },
        "modid:log": {
            "model": "log"   
        }
    }
}
```

#### Models and Textures

The model a block uses when being rendered in the campfire have three different types: `cube_all`, `multi_face`, and `log`.  Each of these model types requires a texture that is placed in `assets/<block_namespace>/textures/entity/campfire/placeable/` (the "block_namespace" being either `minecraft` or `modid` of the block).  Each of these textures require different dimensions and specific placement of the texture in the png file itself.

##### Cube All

A `cube_all` texture requires a 8x8 png files.  If you were making a texture for a diamond block, it would looking something like this:

[<img src="./assets/cube_all.png" width="256"/>](./assets/cube_all.png)

##### Mutli Face

A `multi_face` texture requires a 16x16 png file.  In this file, you need to make six 4x4 squares that represent each face of a block.

- Top face: a 4x4 texture starting at (5, 0) in the texture file.
- West face: a 4x4 texture starting at (0, 5) in the texture file.
- North face: a 4x4 texture starting at (5, 5) in the texture file.
- East face: a 4x4 texture starting at (9, 5) in the texture file.
- South face: a 4x4 texture starting at (13, 5) in the texture file.
- Bottom face: a 4x4 texture starting at (5, 9) in the texture file.

[<img src="./assets/multi_face.png" width="256"/>](./assets/multi_face.png)

##### Log

A `cube_all` texture requires a 8x4 png files (that is, a width of 8px and height of 4px).  The first 4x4 square is the top and bottom of the log.  The second 4x4 square is the bark of the log.

[<img src="./assets/log.png" width="256"/>](./assets/log.png)

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
