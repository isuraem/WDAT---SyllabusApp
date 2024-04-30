export const Courses = [
    {
        id: 1,
        topic: "Next.js course",
        title: "What is next js",
        description: "Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites. React is a JavaScript library that is traditionally used to build web applications rendered in the client's browser with JavaScript.[10] Developers recognize several problems with this strategy however, such as not catering to users who do not have access to JavaScript or have disabled it, potential security issues, significantly extended page loading times, and harm to the site's overall search engine optimization.[10] Frameworks such as Next.js sidestep these problems by allowing some or all of the website to be rendered on the server-side before being sent to the client.[10][11] Next.js is one of the most popular frameworks for React.[12] It is one of several recommended toolchains available when starting a new app, all of which provide a layer of abstraction to aid in common tasks. Next.js requires Node.js and can be initialized using Node Package Manager.Google has contributed to the Next.js project, including 43 pull requests in 2019.[14] As of March 2022, the framework is used by many large websites, including Walmart, Apple, Nike, Netflix, TikTok, Uber, Lyft, and Starbucks. In early 2020, Vercel raised $21 million in Series A funding to support improvements to the software.The framework's original author, Guillermo Rauch, is currently the CEO of Vercel, and the project's lead maintainer is Tim Neutkens.",
        topics: [
            {
                id: 1,
                title: "Introduction to Next.js",
                description: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.What is next js Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.What is next js Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.What is next js",
                code_link: "",
                video_link: "https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=2",
            },
            {
                id: 2,
                title: "Project Structure",
                description: "This page provides an overview of the project structure of a Next.js application. It covers top-level files and folders, configuration files, and routing conventions within the app and pages directories.Click the file and folder names to learn more about each convention.",
                code_link: "",
                video_link: "https://www.youtube.com/watch?v=FmerxXWD66g&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=4" ,
            },
            {
                id: 3,
                title: "Routing",
                description: "The Pages Router has a file-system based router built on concepts of pages. When a file is added to the pages directory it's automatically available as a route. Learn more about routing in the Pages RouterIn version 13, Next.js introduced a new App Router built on React Server Components, which supports shared layouts, nested routing, loading states, error handling, and more.The App Router works in a new directory named app. The app directory works alongside the pages directory to allow for incremental adoption. This allows you to opt some routes of your application into the new behavior while keeping other routes in the pages directory for previous behavior. If your application uses the pages directory, please also see the Pages Router documentation.",
                code_link: "",
                video_link: "https://www.youtube.com/watch?v=Vm7qM1wmXwE&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=6",
            },
            {
                id: 4,
                title: "Nested routing",
                description: "Nested routes are one of React’s unique features that allow users to swap out specific view fragments based on the current path.Multiple tabs (profile and account in this case) can be displayed on a single user page to facilitate browsing through a user’s information. When one of these tabs gets clicked, the URL in the browser and the content of the tab change, but the layout stays the same.",
                code_link: "",
                video_link: "https://www.youtube.com/watch?v=mEral6yz130&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=7",
            },
            {
                id: 5,
                title: "Dynamic Routes",
                description: "Catch-all Segments can be made optional by including the parameter in double square brackets: [[...segmentName]].For example, pages/shop/[[...slug]].js will also match /shop, in addition to /shop/clothes, /shop/clothes/tops, /shop/clothes/tops/t-shirts.The difference between catch-all and optional catch-all segments is that with optional, the route without the parameter is also matched (/shop in the example above).",
                code_link: "",
                video_link: "https://www.youtube.com/watch?v=N4-EkNJ6RFM&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=8",
            }
        ],
        imageSrc: "https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png",
        text: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation."
    },
    {
        id: 2,
        topic: "React course",
        title: "What is next js",
        description: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.What is next js",
        imageSrc: "https://diatomenterprises.com/wp-content/uploads/2022/09/reactJS_logo.jpeg",
        text: "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.",
        topics: [
            {
                id: 1,
                title: "Introduction to Next.js",
                description: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.What is next js",
                code_link: "",
                video_link: "https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=2",
            },
            {
                id: 2,
                title: "What is next js",
                description: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.What is next js",
                code_link: "",
                video_link: "https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=2" ,
            },
            {
                id: 3,
                title: "What is next js",
                description: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.What is next js",
                code_link: "",
                video_link: "https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=2",
            },
            {
                id: 4,
                title: "What is next js",
                description: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.What is next js",
                code_link: "",
                video_link: "https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=2",
            }
        ],
    },
    {
        id: 3,
        topic: "React native course",
        title: "What is next js",
        description: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.What is next js",
        imageSrc: "https://miro.medium.com/v2/resize:fit:700/1*C3kxjCrJy-aWSMpe2chfaA.png",
        text: "React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities.",
        topics: [
            {
                id: 1,
                title: "Introduction to Next.js",
                description: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.What is next js",
                code_link: "",
                video_link: "https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=2",
            },
            {
                id: 2,
                title: "What is next js",
                description: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.What is next js",
                code_link: "",
                video_link: "https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=2" ,
            },
            {
                id: 3,
                title: "What is next js",
                description: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.What is next js",
                code_link: "",
                video_link: "https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=2",
            },
            {
                id: 4,
                title: "What is next js",
                description: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.What is next js",
                code_link: "",
                video_link: "https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=2",
            }
        ],
    },
    {
        id: 4,
        topic: "Tailwind CSS",
        title: "What is next js",
        description: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.What is next js",
        imageSrc: "data:image/png;base64,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",
        text: "Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.",
        topics: [
            {
                id: 1,
                title: "Introduction to Next.js",
                description: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.What is next js",
                code_link: "",
                video_link: "https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=2",
            },
            {
                id: 2,
                title: "What is next js",
                description: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.What is next js",
                code_link: "",
                video_link: "https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=2" ,
            },
            {
                id: 3,
                title: "What is next js",
                description: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.What is next js",
                code_link: "",
                video_link: "https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=2",
            },
            {
                id: 4,
                title: "What is next js",
                description: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.What is next js",
                code_link: "",
                video_link: "https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=2",
            }
        ],
    },
    {
        id: 5,
        topic: "Tailwind CSS",
        title: "What is next js",
        description: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.What is next js",
        imageSrc: "data:image/png;base64,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",
        text: "Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.",
        topics: [
            {
                id: 1,
                title: "Introduction to Next.js",
                description: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.What is next js Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.What is next js Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.What is next js",
                code_link: "",
                video_link: "https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=2",
            },
            {
                id: 2,
                title: "Project Structure",
                description: "This page provides an overview of the project structure of a Next.js application. It covers top-level files and folders, configuration files, and routing conventions within the app and pages directories.Click the file and folder names to learn more about each convention.",
                code_link: "",
                video_link: "https://www.youtube.com/watch?v=FmerxXWD66g&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=4" ,
            },
            {
                id: 3,
                title: "What is next js",
                description: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.What is next js",
                code_link: "",
                video_link: "https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=2",
            },
            {
                id: 4,
                title: "What is next js",
                description: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.What is next js",
                code_link: "",
                video_link: "https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=2",
            }
        ],
    },

]