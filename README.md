# TcHmiJoystick
A joystick for TwinCAT HMI which outputs vector data

![2024-05-30_11-35-59](https://github.com/harisawan03/TcHmiJoystick/assets/19915615/861c989f-983c-4f17-85e6-6f43366a7646)

v1.0.0 built in TE2000 1.12.760.59 and must be used in equal or greater versions.

Credit for JoyStick Library - https://github.com/bobboteck/JoyStick (MIT License)

## Getting Started

Ensure TE2000 v1.12.760.59+ is installed and all System Requirements are met for TwinCAT HMI Engineering.

Download TE2000: https://www.beckhoff.com/en-us/products/automation/twincat/texxxx-twincat-3-engineering/te2000.html

System Requirements: https://infosys.beckhoff.com/content/1033/te2000_tc3_hmi_engineering/2669710091.html?id=84520022315212463


### To use in a TcHMI Project
Begin by cloning this repository and opening the included project. This includes the Framework Project and a Demo HMI project. To see the control in action, simply open the Desktop.view and Liveview.

To bring the control into another project, existing or new, create a NuGet Package from the Framework Project. 

Right-click on the Framework Project in the Solution Explorer and select "Create NuGet Package" - 

![image](https://github.com/harisawan03/TcHmiColorInput/assets/19915615/ad2f01a9-6242-4207-8f06-d0b2853be97e)

Follow the prompts to build the project, then the nupkg file will be added to your local NuGet store, commonly at C:\TwinCAT\Functions\TE2000-HMI-Engineering\References

Next, in a separate TwinCAT HMI Project, right-click on the Project in Solution Explorer and select "Manage NuGet Packages" -
![image](https://github.com/harisawan03/TcHmiColorInput/assets/19915615/f43f3198-ba36-4c25-991d-6f6859c4b6ad)

Navigate to the Browse Tab and ensure Package Source, in the top right corner, is set to TwinCAT HMI Customer. Scroll down to find the TcHmiColorInput package and install it.

![image](https://github.com/harisawan03/TcHmiColorInput/assets/19915615/31b7f27a-d082-400b-9040-f4eb7efed8fd)

Finally, the control will appear in the Toolbox where you can drag and drop it onto your pages.

![image](https://github.com/harisawan03/TcHmiColorInput/assets/19915615/936abab1-c3bb-4bf8-959d-0750703acc45)
