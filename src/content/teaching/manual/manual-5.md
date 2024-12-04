---
title: 'Design Hierarchy'
slug: 'manual-5'
prev: '4'
next: '6'
---

A hierarchical design is formed by placing copies or instances of cells inside other cells. The cell at the top includes the whole design (say, a symbol of an inverter), and the cell at the bottom is the layout (the way things are laid out on the silicon). The top cell is given level number zero, while the bottom cell is given the highest level number.

## Library

Libraries let you organize design data and perform version access and control. A library is a collection of logical design objects, organized in levels as shown:

## Cell

A cell is the basic design object. It forms an individual building block of a chip or system. It is a logical, rather than physical, design object. Each cell has one or more cell views as shown above. Cells can be logically grouped into cell categories. A cell can belong to several cell categories.

## Cell view

A cell view is a virtual data file created in association with a cell and a view. It is a logical, rather than physical, design object.

---

## _Note:_

This hierarchical list may seem confusing, but if you go back to the Library Browser, you will notice that each one correlates to a different level in the libraries.

The Cadence software manages these files transparently. However, because of the relationship between cells, you must use the commands copy, move, and delete within the Cadence software in order to manipulate the different cells. **UNIX operating system commands cannot correctly handle these files.**
