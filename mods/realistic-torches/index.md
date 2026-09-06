---
outline: deep
title: Realistic Torches
---

<ImageComponent 
    :projectName="'Realistic Torches'"
    :imageUrl="'https://cdn.modrinth.com/data/j68jILSN/e6f94053e14ce5ff8470a5faf958aaefa2f97f73.png'" 
/>

## Configuration: Customizing the Properties and How You Maintain Torches

This mod takes advantage of the game having a data driven system, which gives you the ability to customize how this mod functions.  The values that are applied are dependent on pack load order, which means packs on top will override lower packs.  You can create your own custom data pack to modify the following properties:

### Time

`info`: How much time it takes until the torch extinguishes

`json`:

- `minutes`: int (optional)
- `seconds`: int (optional)

`default`: 

```json
{
    "minutes": 3
}
```

### Ignition Items

`info`: Items that can ignite the torch and how much power they emit when doing so.

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

`info`: This dictates how much power is required until the torch ignites.  When valid ignition items are used (like sticks or a flint and steel), this power is added to the torch, and if the current total power is equal to or crosses this threshold, the torch is lit.  Items are consumed (if they are stackable) or damaged (if they are a tool). 

`json`:

- `threshold`: int

`default`:

```json
{
    "threshold": 2
}
```

## Creating the Datapack

To start modifying how this mod works, make a datapack with the following folder structure: `data/<namespace>/torch/`.

### Time

To modify the default time it takes for a torch to extinguish:

1. Make a folder named `time` and place it in the `torch` directory of your datapack.
2. Make a file named `time.json` and place it in the `time` directory with the following content:

```json
{
	"minutes": int,
	"seconds": int
}
```

> [!NOTE]
> If both `minutes` and `seconds` have a value of 0, the time until the torch extinguishes will default back to three minutes.  If none of these values are present, then the game will still default to `3 minutes`.

### Ignition Items

To modify the items that can ignite the torch and the power they have in doing so: 

1. Make a folder named `ignition` with a subdirectory named `items` and place them in the `torch` directory of your datapack.
2. Make a file named `items.json` and place it in the `ignition/items/` directory with the following content:

```json
{
    "values": {
        "minecraft:stick": 1,
        "minecraft:magma_cream": 2
    }
}
```

> [!NOTE]
> Flint and Steel cannot be removed from the list of ignition items.  It will light the torch everytime as it does not operate off of the ignition power system.

### Ignition Threshold

To modify the ignition threshold it takes for the torch to be ignited:

1. Make a folder named `threshold` and place it in the `torch/ignition` directory of your datapack.
2. Make a file named `threshold.json` and place it in the `ignition` directory with the following content:

```json
{
    "threshold": 4
}
```