const getStaticMetaData = ({ title, description, isRobotFollow }) => {
  return {
    title: title,
    description: description,

    other: {
      viewport:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
    },
    icons: [
      {
        rel: "apple-touch-icon",
        url: "/images/favicons/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/images/favicons/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/images/favicons/favicon-16x16.png",
      },
      {
        rel: "icon",
        url: "/images/favicons/favicon.ico",
      },
      {
        rel: "mask-icon",
        url: "/images/favicons/safari-pinned-tab.svg",
      },
    ],

    openGraph: {
      title: title,
      siteName: title,
      description: description,

      width: 1200,
      height: 628,
    },
    twitter: {
      title: title,
      siteName: title,
      description: description,

      width: 1200,
      height: 628,
    },
    robots: {
      index: isRobotFollow,
      follow: isRobotFollow,
      nocache: isRobotFollow,
      googleBot: {
        index: isRobotFollow,
        follow: isRobotFollow,
        noimageindex: isRobotFollow,
      },
    },
  };
};

export default getStaticMetaData;
