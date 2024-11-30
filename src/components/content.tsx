import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

export const Content = () => (
  <div className="justify-center text-justify font-light ">
    <p className="mb-2 p-2 mx-4">
      Over the past 25 years, Ralph Etienne-Cummings’ research has developed through three main phases. In the early
      part of his career, he studied biologically inspired sensors and sensory computation systems, primarily in the
      form of vision sensors. Typically, these systems were implemented with Very Large Scale Integrated (VLSI)
      technology and were used to extract information about the environment and to guide the “attention” of other
      computation systems.
    </p>

    <p className="mb-2 p-2 mx-4">
      In the middle part of his career, he studied how these systems can be hosted onto robots. At that point he also
      started to model spinal neural circuits in silicon, and develop robots to study legged locomotion. Both VLSI
      circuits and biomorphic robots were developed and used in these studies. More recently, he has evolved this work
      to include brain-machine interfaces and neural prosthesis devices. Specifically, he started looking at spinal and
      cortical prosthesis devices and robotic systems to restore function after injury and for human augmentation. This
      area has required close collaboration with neuroscientists to gain access to animal models (i.e. lamprey, cat,
      ferret and monkey preparations).
    </p>

    <div className="image-block">
      <StaticImage
        src="../../static/images/MN_circuit.png"
        alt="CMOS Mihalas-Niebur Model using switch capacitors"
        placeholder="blurred"
      />
      <figcaption className="fig-caption">Fig 1: placeholder</figcaption>
    </div>

    <p className="mb-2 bg-white p-2 rounded-md">
      His work has the potential to produce computers that can perform recognition tasks as effortlessly living
      organism, legged robots that are as efficient and elegant as humans and prosthetics than can seamlessly interface
      with the human body to restore functionality after injury or to overcome disease. Lastly, we have also been
      working on developing miniaturized ultrasound phased arrays, developing interstitial high intensity ultrasound
      ablation and monitoring system, and most recently we focused on developing ultrasonically “smart” tools.
    </p>

    <ol className="mb-2 list-decimal p-2 bg-white pl-8 rounded-md">
      <li>VLSI implementation of large scale neural systems for sensory information processing.</li>
      <li>Development of neurally inspired control systems for legged robots.</li>
      <li>Development of neural prosthetic devices for lower and upper limbs.</li>
      <li>Development of compressive recording and functional stimulation of in vivo neural systems.</li>
      <li>Image and video analysis for activity recognition and control.</li>
    </ol>

    <p className="mb-2 bg-white p-2 rounded-md">
      His work has the potential to produce computers that can perform recognition tasks as effortlessly living
      organism, legged robots that are as efficient and elegant as humans and prosthetics than can seamlessly interface
      with the human body to restore functionality after injury or to overcome disease. Lastly, we have also been
      working on developing miniaturized ultrasound phased arrays, developing interstitial high intensity ultrasound
      ablation and monitoring system, and most recently we focused on developing ultrasonically “smart” tools.
    </p>
  </div>
);

export default Content;
