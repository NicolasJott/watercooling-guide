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
            body: "The benefits of custom water cooling include better temperature management, quieter operation, and the ability to overclock components" +
                `for better performance. As EKWB says "Because liquid cooling radiators provide a huge cooling area, we can use fans at very low speeds, that are practically inaudible. You can enjoy gaming and everyday desktop work with absolutely no noise coming out of your computer!" However, it can be more expensive and requires more maintenance than traditional air cooling. ` +
                "It is a popular choice for enthusiasts and gamers who want to push their systems to the limit."
        },
    ],

    gettingStartedItems: [
        {
            title: "Water Blocks:",
            body: "Water blocks are used to transfer heat from the source into the liquid that flows through the water block. Micro fins that increase the cooling surface and channel design make the water block a crucial part of the loop that will enable you to achieve the highest overclocks!",
            url: "../waterblocks/gpu_cpu_block.png",
        },
        {
            title: "Radiator & Fans:",
            body: "The radiator’s main function is to cool down the liquid flowing inside the loop. As the liquid flows through the copper tubing, the radiator fins absorb the heat from the water, then the fins are cooled by the fans attached to the radiator. Fans are also very important part because they must provide high-static pressure and remain quiet at the same time!",
            url: "../radiators/Radiator.png",
        },
        {
            title: "Pump:",
            body: "The pump is the heart of every liquid cooling loop. Pumps provide the circulation of the coolant in the loop by pushing the liquid through other components. A stand-alone pump is usually made from a pump motor and a pump top with inlet and outlet ports.",
            url: "../misc/pump.png",
        },
        {
            title: "Tubing:",
            body: "Tubes connect every component in the loop and before you buy make sure the size (ID and OD) of the tube matches with the size of your fittings and vice a versa. Every tube is marked with two numbers, where the smaller number presents the inner diameter or ID and the larger number presents the outer diameter or OD.",
        },
        {
            title: "Fittings:",
            body: "Fittings are used for connecting the tubes or pipes with other different components in the liquid cooling loop. There are numerous sizes and shapes, as well as differentiation between fittings for soft  and hard tubing. You will always need two fittings for each component.",
            url: "../fittings/fittings.png",
        },
        {
            title: "Coolant:",
            body: "The coolant is the liquid that transfers heat from the components to the radiator. When choosing a coolant, make sure it is compatible with your components and does not contain any harmful additives that could damage your loop. You'll also want to consider the color and UV-reactivity of the coolant, as well as its performance and cost.",
            url: "../misc/coolant.png",
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

    SingleInstallationSteps: [
        {
            body: "Step 1: Install CPU Waterblock",
            description: "The CPU block sits directly on the cpu. For this example, it is assumed that there is thermal paste pre-applied to the contact point of the Waterblock.",
            pictureList: [
                {
                    id: 'cpu',
                    url: '../waterblocks/CPU_Block.png'
                },
            ],
        },
        {
            body: "Step 2: Install Distribution Plate and Pump Combo",
            description: "The Distribution Plate is sort of the heart of the loop. It contains a water pump and acts as a reservoir for any extra coolant that circulates inside the system.",
            pictureList: [
                {
                    id: 'distro',
                    url: '../waterblocks/Distro_single_rad.png'
                },
            ],
        },
        {
            body: "Step 3: Install Radiator",
            description: "The radiator is responsible for dissipating the heat from the coolant that has previously passed through any components high in heat. Assume that fittings have already been installed on the radiator.",
            pictureList: [
                {
                    id: 'radiator',
                    url: '../radiators/Radiator.png'
                },
            ],
        },
        {
            body: "Step 4: Install Fans on Radiator",
            description: "These fans are in a negative configuration, meaning that air inside the system gets expelled out the top of the system. This movement of air also allows the air to pull heat off of the radiators fins.",
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
                    top: "11.5%",
                    left: "2.5%",
                },
                {
                    top: "11.5%",
                    left: "22.5%",
                },
                {
                    top: "11.5%",
                    left: "42.5%",
                },
            ]
        },
        {
            body: "Step 5: Install Flat Fittings on Distribution Plate",
            description: "These fittings will allow for the connection of tubing between the cpu as well as the radiator.",
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
                    bottom: "67.8%",
                    left: "54.8%",
                    image: null,
                },
                {
                    id: 4,
                    bottom: "62.9%",
                    left: "54.7%",
                    image: null,
                },
                {
                    id: 5,
                    bottom: "80.5%",
                    left: "66%",
                    image: null,
                },
                {
                    id: 6,
                    bottom: "69%",
                    left: "66%",
                    image: null,
                },
            ]
        },
        {
            body: "Step 6: Install 90 Degree Fittings on Distribution Plate",
            description: "Installing these fittings will ensure that the channels for the distribution plate are not closed off when tubing is connected. The purpose of this is to act as a bridge since we wont be cooling the GPU in this configuration.",
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
                    bottom: "48.4%",
                    left: "54.7%",
                    transform: "rotate(180deg)",
                    zIndex: "10",
                    image: null,
                },
                {
                    id: 4,
                    bottom: "37.7%",
                    left: "54.7%",
                    transform: "none",
                    zIndex: "10",
                    image: null,
                },
               ]
        },
        {
            body: "Step 7: Install 90 Degree Fittings on Cpu Block",
            description: "The angled adapter fittings on the CPU Block will allow for an easier tubing configuration.",
            pictureList: [
                {
                    id: 'angleCPU',
                    url: '../fittings/top_view_angle_fitting_up.PNG'
                },
                {
                    id: 'angleCPU',
                    url: '../fittings/top_view_angle_fitting_up.PNG'
                },
            ],
            CpuFittingTargets: [
                {
                    id: 0,
                    bottom: "66.2%",
                    left: "21.5%",
                    transform: "none",
                    zIndex: "10",
                    image: null,
                },
                {
                    id: 1,
                    bottom: "66.2%",
                    left: "25.4%",
                    transform: "rotate(90deg)",
                    zIndex: "10",
                    image: null,
                },
            ]

        },
        {
            body: "Step 7: Install 90 Degree Fitting on Cpu Block",
            description: "This fitting will allow for a parallel tube run",
            pictureList: [
                {
                    id: 'rightCpu',
                    url: '../fittings/90_top_right.png'
                },
            ],
            CpuFittingTargets: [
                {
                    id: 0,
                    bottom: "69.2%",
                    left: "21.5%",
                    zIndex: "1",
                    image: null,
                },
            ]

        },
        {
            body: "Step 8: Install Tubing for Cpu Block",
            description: "This tubing will take coolant to and from the cpu by way of the distribution plate.",
            pictureList: [
                {
                    id: "cpuTube",
                    url: '../tubing/cpu_top_tube.PNG'
                },
                {
                    id: "cpuTube",
                    url: '../tubing/cpu_bottom_tube.PNG'
                },
            ],
            CpuTubingTargets: [
                {
                    id: 0,
                    bottom: "68%",
                    left: "21.5%",
                    width: "395px",
                    height: "40px",
                    zIndex: "1",
                    image: null,
                },
                {
                    id: 1,
                    bottom: "63.5%",
                    left: "23.8%",
                    width: "365px",
                    height: "50px",
                    zIndex: "1",
                    image: null,
                },
            ]
        },
        {
            body: "Step 9: Install Inner Tubing for Radiator",
            description: "This tube is the first connection between the radiator and the distribution plate.",
            pictureList: [
                {
                    id: 'inner',
                    url: '../tubing/inner_top_rad_tube.png'
                },
            ],
            TubingTargets: [
                {
                    id: 0,
                    top: "9%",
                    right: "31.3%",
                    width: "30px",
                    height: "80px",
                    zIndex: "1",
                },
            ]
        },
        {
            body: "Step 10: Install Outer Tubing for Radiator",
            description: "This tube is the second connection between the radiator and the distribution plate.",
            pictureList: [
                {
                    id: 'outer',
                    url: '../tubing/outer_top_rad_tube.png'
                },
            ],
            TubingTargets: [
                {
                    id: 0,
                    top: "11%",
                    right: "31.3%",
                    width: "30px",
                    height: "150px",
                    zIndex: "1",
                },
            ]
        },
        {
            body: "Step 11: Install Tubing Bridge for Distribution Plate",
            description: "As stated previously, this tube is essential for bridging the channels of the distribution plate since there is no GPU configuration.",
            pictureList: [
                {
                    id: 'distroTube',
                    url: '../tubing/distro_bridge_tube.png'
                },
            ],
            TubingTargets: [
                {
                    id: 0,
                    bottom: "40%",
                    left: "54.7%",
                    width: "28px",
                    height: "90px",
                    zIndex: "1",
                },
            ]
        },
        {
            body: "Step 12: Fill System With Coolant",
            description: "Click on the coolant bottle to fill the loop!",
            pictureList: [
                {
                    id: 'coolant',
                    url: '../misc/coolant.png'
                },
                ],
        },
        {
            body: "Congratulations! You have completed the build!",
            description: "Your pc now has a single custom water-cooling loop. Your temps will now be lower than ever!",
            pictureList: [
                {
                    id: 'coolant',
                    url: '../misc/coolant.png'
                },
            ],
        },
    ],

    DualInstallationSteps: [
        {
            body: "Step 1: Install CPU Waterblock",
            description: "The CPU block sits directly on the cpu. For this example, it is assumed that there is thermal paste pre-applied to the contact point of the Waterblock.",
            pictureList: [
                {
                    id: 'cpu',
                    url: '../waterblocks/CPU_Block.png'
                },
            ],
        },
        {
            body: "Step 2: Install Distribution Plate and Pump Combo",
            description: "The Distribution Plate is sort of the heart of the loop. It contains a water pump and acts as a reservoir for any extra coolant that circulates inside the system.",
            pictureList: [
                {
                    id: 'distro',
                    url: '../waterblocks/Distro_double_rad.png'
                },
            ],
        },
        {
            body: "Step 3: Install Radiators",
            description: "The radiators are responsible for dissipating the heat from the coolant that has previously passed through any components high in heat. Assume that fittings have already been installed on the radiators.",
            pictureList: [
                {
                    id: 'radiator',
                    url: '../radiators/Radiator.png'
                },
                {
                    id: 'radiator',
                    url: '../radiators/Radiator.png'
                },
            ],
            RadiatorTargets: [
                {
                    top: "5%",
                    left: "2.5%",
                },
                {
                    top: "81%",
                    left: "2.5%",
                },
            ]
        },
        {
            body: "Step 4: Install Fans on Radiators",
            description: "The top fans are in a negative configuration, meaning that air inside the system gets expelled out the top of the system. This movement of air also allows the air to pull heat off of the radiators fins." +
                " The bottom fans are in a positive configuration, meaning that the fans pull in fresh air from underneath the system. This benefits the cooling performance because fresh, cool air is being used to pull heat off of the radiator fins." +
                " The top and bottom fans work nicely together to pull air into the system from the bottom and out of the system from the top.",
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
                    top: "11.5%",
                    left: "2.5%",
                },
                {
                    top: "11.5%",
                    left: "22.5%",
                },
                {
                    top: "11.5%",
                    left: "42.5%",
                },
                {
                    top: "76%",
                    left: "2.5%",
                },
                {
                    top: "76%",
                    left: "22.5%",
                },
                {
                    top: "76%",
                    left: "42.5%",
                },
            ]
        },
        {
            body: "Step 5: Install Flat Fittings on Distribution Plate",
            description: "These fittings will allow for the connection of tubing between the cpu, gpu as well as both radiators.",
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
                    id: 1,
                    bottom: "67.8%",
                    left: "54.7%",
                    image: null,
                },
                {
                    id: 2,
                    bottom: "62.9%",
                    left: "54.7%",
                    image: null,
                },
                {
                    id: 3,
                    bottom: "80.5%",
                    left: "66%",
                    image: null,
                },
                {
                    id: 4,
                    bottom: "69%",
                    left: "66%",
                    image: null,
                },
                {
                    id: 5,
                    bottom: "48.4%",
                    left: "54.7%",
                    image: null,
                },
                {
                    id: 6,
                    bottom: "37.5%",
                    left: "54.7%",
                    image: null,
                },
                {
                    id: 7,
                    bottom: "38.4%",
                    left: "66.3%",
                    image: null,
                },
                {
                    id: 8,
                    bottom: "33.2%",
                    left: "66.3%",
                    image: null,
                },
            ]
        },
        {
            body: "Step 6: Install 90 Degree Fittings on Cpu Block",
            description: "The angled adapter fittings on the CPU Block will allow for an easier tubing configuration.",
            pictureList: [
                {
                    id: 'angleCPU',
                    url: '../fittings/top_view_angle_fitting_up.PNG'
                },
                {
                    id: 'angleCPU',
                    url: '../fittings/top_view_angle_fitting_up.PNG'
                },
            ],
            CpuFittingTargets: [
                {
                    id: 0,
                    bottom: "66.2%",
                    left: "21.5%",
                    transform: "none",
                    zIndex: "10",
                    image: null,
                },
                {
                    id: 1,
                    bottom: "66.2%",
                    left: "25.4%",
                    transform: "rotate(90deg)",
                    zIndex: "10",
                    image: null,
                },
            ]

        },
        {
            body: "Step 6: Install 90 Degree Fitting on Cpu Block",
            description: "This fitting will allow for a parallel tube run",
            pictureList: [
                {
                    id: 'rightCpu',
                    url: '../fittings/90_top_right.png'
                },
            ],
            CpuFittingTargets: [
                {
                    id: 0,
                    bottom: "69.2%",
                    left: "21.5%",
                    zIndex: "1",
                    image: null,
                },
            ]
        },
        {
            body: "Step 7: Install 90 Degree Fittings on GPU Block",
            description: "The angled adapter fittings on the GPU Block will allow for an easier tubing configuration.",
            pictureList: [
                {
                    id: 'angleGPU',
                    url: '../fittings/90_top_right.png'
                },
                {
                    id: 'angleGPU',
                    url: '../fittings/90_top_right.png'
                },
            ],
            FittingTargets: [
                {
                    id: 0,
                    bottom: "48.9%",
                    left: "18.3%",
                    transform: "none",
                    zIndex: "10",
                    image: null,
                },
                {
                    id: 1,
                    bottom: "36.9%",
                    left: "24.2%",
                    transform: "scaleY(-1)",
                    zIndex: "10",
                    image: null,
                },
            ]

        },
        {
            body: "Step 8: Install Tubing for Cpu Block",
            description: "This tubing will take coolant to and from the cpu by way of the distribution plate.",
            pictureList: [
                {
                    id: "cpuTube",
                    url: '../tubing/cpu_top_tube.PNG'
                },
                {
                    id: "cpuTube",
                    url: '../tubing/cpu_bottom_tube.PNG'
                },
            ],
            CpuTubingTargets: [
                {
                    id: 0,
                    bottom: "68%",
                    left: "21.5%",
                    width: "395px",
                    height: "40px",
                    zIndex: "1",
                    image: null,
                },
                {
                    id: 1,
                    bottom: "63.5%",
                    left: "23.8%",
                    width: "365px",
                    height: "50px",
                    zIndex: "1",
                    image: null,
                },
            ]
        },
        {
            body: "Step 9: Install Tubing for GPU Block",
            description: "This tubing will take coolant to and from the gpu by way of the distribution plate.",
            pictureList: [
                {
                    id: "gpuTube",
                    url: '../tubing/top_gpu_tube.PNG'
                },
                {
                    id: "gpuTube",
                    url: '../tubing/bottom_gpu_tube.PNG'
                },
            ],
            TubingTargets: [
                {
                    id: 0,
                    bottom: "49%",
                    left: "20.5%",
                    width: "404px",
                    height: "30px",
                    zIndex: "1",
                    image: null,
                },
                {
                    id: 1,
                    bottom: "37.5%",
                    left: "24.8%",
                    width: "354px",
                    height: "30px",
                    zIndex: "1",
                    image: null,
                },
            ]
        },
        {
            body: "Step 10: Install Inner Tubing for the top Radiator",
            description: "This tube is the first connection between the top radiator and the distribution plate.",
            pictureList: [
                {
                    id: 'inner',
                    url: '../tubing/inner_top_rad_tube.png'
                },
            ],
            TubingTargets: [
                {
                    id: 0,
                    top: "9%",
                    right: "31.3%",
                    width: "30px",
                    height: "80px",
                    zIndex: "1",
                },
            ]
        },
        {
            body: "Step 11: Install Outer Tubing for top Radiator",
            description: "This tube is the second connection between the top radiator and the distribution plate.",
            pictureList: [
                {
                    id: 'outer',
                    url: '../tubing/outer_top_rad_tube.png'
                },
            ],
            TubingTargets: [
                {
                    id: 0,
                    top: "11%",
                    right: "31.3%",
                    width: "30px",
                    height: "150px",
                    zIndex: "1",
                },
            ]
        },
        {
            body: "Step 12: Install Inner Tubing for the bottom Radiator",
            description: "This tube is the first connection between the bottom radiator and the distribution plate.",
            pictureList: [
                {
                    id: 'innerBottom',
                    url: '../tubing/inner_bottom_rad_tube.png'
                },
            ],
            TubingTargets: [
                {
                    id: 0,
                    bottom: "17%",
                    left: "66.3%",
                    width: "30px",
                    height: "150px",
                    zIndex: "1",
                },
            ]
        },
        {
            body: "Step 13: Install outer Tubing for the bottom Radiator",
            description: "This tube is the second connection between the bottom radiator and the distribution plate.",
            pictureList: [
                {
                    id: 'outerBottom',
                    url: '../tubing/outer_bottom_rad_tube.png'
                },
            ],
            TubingTargets: [
                {
                    id: 0,
                    bottom: "17%",
                    left: "66.3%",
                    width: "30px",
                    height: "193px",
                    zIndex: "1",
                },
            ]
        },
        {
            body: "Step 14: Fill System With Coolant",
            description: "Click on the coolant bottle to fill the loop!",
            pictureList: [
                {
                    id: 'coolant',
                    url: '../misc/coolant.png'
                },
            ],
        },
        {
            body: "Congratulations! You have completed the build!",
            description: "Your pc now has a dual custom water-cooling loop. Your temps will now be lower than ever!",
            pictureList: [
                {
                    id: 'coolant',
                    url: '../misc/coolant.png'
                },
            ],
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