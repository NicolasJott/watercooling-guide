const {DistrofittingTargets} = require("./styled/DragDrop");
module.exports = {

    navLinks: [
        {
            name: 'FAQ',
            url:'#faq',
        },
        {
            name: 'Choosing Components',
            url:'#get-started',
        },
        {
            name: 'Installation',
            url:'#install',
        },
    ],

    landingItems: [
        {
            header: "What Is Custom Water Cooling?",
            body: "Custom water cooling is a method of cooling computer components, such as CPUs and GPUs using a liquid coolant instead of traditional air cooling. " +
                "This involves installing a custom loop of tubing, reservoirs, pumps, " +
                "and radiators to circulate the coolant through the components."
        },

        {
            header: "Why Custom Water Cool?",
            body: "The benefits of custom water cooling include better temperature management, quieter operation, and the ability to overclock components " +
                "for better performance. However, it can be more expensive and requires more maintenance than traditional air cooling. " +
                "It is a popular choice for enthusiasts and gamers who want to push their systems to the limit."
        },
    ],

    gettingStartedItems: [
        {
            title: "Water Blocks:",
            body: "The water block is the component that sits on top of the CPU or GPU and transfers heat from the\n" +
                "component to the liquid coolant. When choosing a water block, make sure it is compatible with your specific CPU or GPU model.\n" +
                "You'll also want to consider the block's material (copper, nickel, or brass), as well as its performance and cost.",
            url: "../waterblocks/gpu_cpu_block.png",
        },
        {
            title: "Radiator:",
            body: "The radiator is responsible for dissipating the heat from the coolant, so it's an important component to consider. When choosing a radiator, make sure it fits in your case and has enough capacity to handle the heat generated by your components. You'll also want to consider the number of fins per inch (FPI), as well as the thickness of the radiator.",
            url: "../radiators/Radiator.png",
        },
        {
            title: "Pump:",
            body: "The pump is responsible for circulating the coolant through the loop. When choosing a pump, make sure it has enough flow rate to handle the size of your loop and the components you're cooling. You'll also want to consider the noise level of the pump, as well as its reliability and cost.",
            url: "../misc/pump.png",
        },
        {
            title: "Tubing:",
            body: "The tubing connects the various components in your loop. When choosing tubing, make sure it has the right diameter for your fittings and components. You'll also want to consider the material (soft or hard tubing), as well as its flexibility and durability.",
            url: "../tubing/tubing.png",
        },
        {
            title: "Coolant:",
            body: "The coolant is the liquid that transfers heat from the components to the radiator. When choosing a coolant, make sure it is compatible with your components and does not contain any harmful additives that could damage your loop. You'll also want to consider the color and UV-reactivity of the coolant, as well as its performance and cost.",
            url: "../misc/coolant.png",
        },
        {
            title: "Fittings:",
            body: "When it comes to setting up a water cooling system, choosing the right fittings is essential to ensure a leak-free and efficient setup. Fittings are used to connect the tubing to the various components in the loop, such as the water blocks, radiators, reservoirs, and pumps. There are various types of fittings available, including compression fittings, barb fittings, and quick disconnect fittings, each with its own advantages and disadvantages. It's important to consider factors such as compatibility, size, and aesthetics when choosing fittings for your water cooling setup.",
            url: "../fittings/fittings.png",
        },

    ],

    faqItems: [
        {
            question: "What are the benefits of custom water-cooling over air cooling?",
            answer: "Custom water-cooling typically provides better cooling performance, lower noise levels, and greater flexibility in terms of design and customization.",
        },
        {
            question: "How does custom water-cooling work?",
            answer: "Custom water-cooling uses a series of interconnected components, including a pump, reservoir, radiator, and tubing, to circulate liquid through the system and dissipate heat from the computer's components.",
        },
        {
            question: "What components can be water-cooled?",
            answer: "Any component that generates significant amounts of heat, such as the CPU, GPU, and VRMs, can be water-cooled.",
        },
        {
            question: "Is custom water-cooling difficult to install?",
            answer: "Installing custom water-cooling can be a complex and time-consuming process, especially for those who are not familiar with the components and installation process.",
        },
        {
            question: "Can I build my own custom water-cooling system?",
            answer: "Yes, many PC enthusiasts build their own custom water-cooling systems, although it requires knowledge of the components and installation process.",
        },
        {
            question: "What components do I need to build a custom water-cooling system?",
            answer: "To build a custom water-cooling system, you will need a water block for each component you want to cool, a pump, a reservoir, a radiator, tubing, and fittings.",
        },
        {
            question: "How much does a custom water-cooling system cost?",
            answer: "The cost of a custom water-cooling system can vary widely depending on the components chosen, but it can range from several hundred to several thousand dollars.",
        },
        {
            question: "What maintenance is required for a custom water-cooling system?",
            answer: "Custom water-cooling systems require regular maintenance, such as checking coolant levels, cleaning the components, and replacing any worn or damaged parts.",
        },
        {
            question: "Is custom water-cooling safe for my PC?",
            answer: "Custom water-cooling is generally safe for PCs as long as it is installed correctly and maintained properly. However, any liquid cooling system can pose a risk of leaks or damage if not installed and maintained correctly.",
        },

    ],

    InstallationSteps: [
        {
            body: "Step 1: Install CPU Waterblock",
            pictureList: [
                {
                    id: 'cpu',
                    url: '../waterblocks/CPU_Block.png'
                },
            ],
        },
        {
            body: "Step 2: Install Distribution Plate and Pump Combo",
            pictureList: [
                {
                    id: 'distro',
                    url: '../waterblocks/Distro_single_rad.png'
                },
            ],
        },
        {
            body: "Step 3: Install Radiator",
            pictureList: [
                {
                    id: 'radiator',
                    url: '../radiators/Radiator.png'
                },
            ],
        },
        {
            body: "Step 4: Install Fans on Radiator",
            pictureList: [
                {
                    id: 'fan',
                    url: '../fans/Fan.png'
                },
                {
                    id: 'fan',
                    url: '../fans/Fan.png'
                },
                {
                    id: 'fan',
                    url: '../fans/Fan.png'
                },
            ],
            FanTargets: [
                {
                    bottom: "590px",
                    left: "26px",
                },
                {
                    bottom: "620px",
                    left: "257px",
                },
                {
                    bottom: "650px",
                    left: "487px",
                },
            ]
        },
        {
            body: "Step 5: Install Flat Fittings on Distribution Plate",
            pictureList: [
                {
                    id: 'flat',
                    url: '../fittings/fitting.png'
                },
                {
                    id: 'flat',
                    url: '../fittings/fitting.png'
                },
                {
                    id: 'flat',
                    url: '../fittings/fitting.png'
                },
                {
                    id: 'flat',
                    url: '../fittings/fitting.png'
                },
            ],
            DistroFittingTargets: [
                {
                    id: 3,
                    bottom: "72.2%",
                    left: "70.8%",
                    image: null,
                },
                {
                    id: 4,
                    bottom: "70.9%",
                    left: "70.8%",
                    image: null,
                },
                {
                    id: 5,
                    bottom: "91.5%",
                    left: "85.4%",
                    image: null,
                },
                {
                    id: 6,
                    bottom: "84.5%",
                    left: "85.4%",
                    image: null,
                },
            ]
        },
        {
            body: "Step 6: Install 90 Degree Fittings on Distribution Plate",
            pictureList: [
                {
                    id: 'angleDistro',
                    url: '../fittings/top_view_angle_fitting_up.PNG'
                },
                {
                    id: 'angleDistro',
                    url: '../fittings/top_view_angle_fitting_up.PNG'
                },
            ],
            DistroFittingTargets: [
                {
                    id: 3,
                    bottom: "68.5%",
                    left: "70.8%",
                    transform: "rotate(180deg)",
                    image: null,
                },
                {
                    id: 4,
                    bottom: "61.9%",
                    left: "70.8%",
                    transform: "none",
                    image: null,
                },
               ]
        },
        {
            body: "Step 7: Install 90 Degree Fittings on Cpu Block",
            pictureList: [
                {
                    id: 'angleCPU',
                    url: '../fittings/top_view_angle_fitting_right.PNG'
                },
                {
                    id: 'angleCPU',
                    url: '../fittings/top_view_angle_fitting_up.PNG'
                },
            ],
            CpuFittingTargets: [
                {
                    id: 0,
                    bottom: "92.5%",
                    left: "27.8%",
                    transform: "rotate(270deg)",
                    image: null,
                },
                {
                    id: 1,
                    bottom: "96.3%",
                    left: "32.8%",
                    transform: "none",
                    image: null,
                },
            ]

        },
        {
            body: "Step 7: Install 90 Degree Fitting on Cpu Block",
            pictureList: [
                {
                    id: 'rightCpu',
                    url: '../fittings/90_top.png'
                },
            ],
            CpuFittingTargets: [
                {
                    id: 0,
                    bottom: "92.5%",
                    left: "27.8%",
                    image: null,
                },
            ]

        },
        {
            body: "Step 8: Install Tubing for Cpu Block",
            pictureList: [
                {
                    id: 1,
                    url: '../tubing/cpu_top_tube.PNG'
                },
                {
                    id: 2,
                    url: '../tubing/cpu_bottom_tube.PNG'
                },
            ],
        },
        {
            body: "Step 9: Install Tubing for Radiator",
            pictureList: [
                {
                    id: 1,
                    url: '../tubing/inner_top_rad_tube.png'
                },
                {
                    id: 2,
                    url: '../tubing/outer_top_rad_tube.png'
                },
            ],
        },
        {
            body: "Step 10: Install Tubing Bridge for Distribution Plate",
            pictureList: [
                {
                    id: 1,
                    url: '../tubing/inner_top_rad_tube.png'
                },
            ],
        },
        {
            body: "Step 11: Test For Leaks"
        },
        {
            body: "Step 12: Fill System With Coolant"
        },
    ],

    CPUList: [
        {
            id: 'cpu',
            url: '../waterblocks/CPU_Block.png'
        },
    ],

    CpuFittingList1: [
        {
            id: '90right',
            url: '../fittings/90_right.png'
        },
    ],

    DistroList: [
        {
            id: 'distro',
            url: '../waterblocks/Distro_single_rad.png'
        }
    ],

    RadiatorList: [
        {
            id: 'radiator',
            url: '../radiators/rad_drag.png'
        }
    ],

    DistroFittingList: [
        {
            id: 1,
            url: '../fittings/fitting.png'
        },
        {
            id: 2,
            url: '../fittings/fitting.png'
        },
        {
            id: 3,
            url: '../fittings/fitting.png'
        },
        {
            id: 4,
            url: '../fittings/fitting.png'
        },
    ],


    srConfig: (delay = 200, viewFactor = 0.25) => ({
        origin: 'bottom',
        distance: '20px',
        duration: 500,
        delay,
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        scale: 1,
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        mobile: true,
        reset: false,
        useDelay: 'always',
        viewFactor,
        viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    }),
};