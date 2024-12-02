---
order: 1
current: true
slug: 'hippocampal-slam-and-navigation'
title: 'Hippocampal SLAM and Navigation'
team:
  - 'Uejima Takeshi'
  - 'Elena Mancinelli'
publications:
  - 'Proto-Object Based Saliency Model with Second-Order Texture Feature'
  - 'Computational Stereo-Vision Model of Proto-Object Based Saliency in Three-Dimensional Space'
  - 'Neuromorphic Visual Saliency Implementation Using Stochastic Computation'
  - 'Live Demonstration: Real-Time Implementation of a Proto-Object-Based'
  - 'How Is Motion Integrated Into a Proto-Object Based Visual Saliency Model?'
  - 'Proto-Object Based Visual Saliency Model with a Motion-Sensitive Channel'
  - 'A Model of Proto-Object Based Saliency'
subtitle: >
  The nervous system can rapidly select important information from a visual scene and pay attention to it. Bottom-up saliency models use low-level features such as intensity, color, and orientation to generate a saliency map that predicts human fixations.
blocks:
  - template: BlockText
    header: 'Project Description & Figures'
    content: |
      Aimed at building a biologically plausible system to reproduce the spatial encoding behavior discovered in the Hippocampus of rodents. This topic helps improve the understanding of neurological systems as well as the robotic SLAM problem. Specifically, several groups of neurons become active only when the rodent is at certain spatial locations.
      Neurological models attribute such spatial encoding to neurons that react to the animal’s locomotion. We believe that navigation and tracking capabilities are achieved through interactions between these groups of neurons. This project tests and improves models of such interactions to create a navigation and tracking system inspired by neural activities.
      A mixed-mode ASIC chip is designed to generate the basic neural response to locomotion. An improved model for generating spatial encoding in silicon circuit environments has been proposed. Currently, the model is being implemented with the chip and FPGA for an integrated system for path tracking and mapping.

  - template: BlockImage
    caption: >
      Figure 1: A tracking event with the improved model of place cells that compensates for variations 
      of actual neural activities and silicon circuits.
    src: '/images/research/complex-vco.png'

  - template: BlockGroupImage
    caption: >
      Figure 2: A picture of the chip die under microscope on the left and its application on the right.
    srcs:
      - '/images/research/complex-vco.png'
      - '/images/research/complex-vco.png'
---
