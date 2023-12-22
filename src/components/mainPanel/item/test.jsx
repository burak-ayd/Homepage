import { useState, useEffect } from "react";
import GridLayout from "react-grid-layout";
const MainItem = () => {
    const bookmarksData = [
        {
            name: "Google",
            url: "https://www.google.com",
            icon: "https://www.google.com/favicon.ico",
            id: "1",
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com",
            icon: "https://www.facebook.com/favicon.ico",
            id: "2",
        },
        {
            name: "YouTube",
            url: "https://www.youtube.com",
            icon: "https://www.youtube.com/favicon.ico",
            id: "3",
        },
        {
            name: "Twitter",
            url: "https://www.twitter.com",
            icon: "https://www.twitter.com/favicon.ico",
            id: "4",
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com",
            icon: "https://www.instagram.com/favicon.ico",
            id: "5",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com",
            icon: "https://www.linkedin.com/favicon.ico",
            id: "6",
        },
        {
            name: "Pinterest",
            url: "https://www.pinterest.com",
            icon: "https://www.pinterest.com/favicon.ico",
            id: "7",
        },
        {
            name: "Snapchat",
            url: "https://www.snapchat.com",
            icon: "https://www.snapchat.com/favicon.ico",
            id: "8",
        },
        {
            name: "Tumblr",
            url: "https://www.tumblr.com",
            icon: "https://www.tumblr.com/favicon.ico",
            id: "9",
        },
        {
            name: "Reddit",
            url: "https://www.reddit.com",
            icon: "https://www.reddit.com/favicon.ico",
            id: "10",
        },
        {
            name: "Amazon",
            url: "https://www.amazon.com",
            icon: "https://www.amazon.com/favicon.ico",
            id: "11",
        },
        {
            name: "Ebay",
            url: "https://www.ebay.com",
            icon: "https://www.ebay.com/favicon.ico",
            id: "12",
        },
        {
            name: "Netflix",
            url: "https://www.netflix.com",
            icon: "https://www.netflix.com/favicon.ico",
            id: "13",
        },
        {
            name: "Spotify",
            url: "https://www.spotify.com",
            icon: "https://www.spotify.com/favicon.ico",
            id: "14",
        },
        {
            name: "WhatsApp",
            url: "https://www.whatsapp.com",
            icon: "https://www.whatsapp.com/favicon.ico",
            id: "15",
        },
        {
            name: "Twitch",
            url: "https://www.twitch.tv",
            icon: "https://www.twitch.tv/favicon.ico",
            id: "16",
        },
        {
            name: "Yahoo",
            url: "https://www.yahoo.com",
            icon: "https://www.yahoo.com/favicon.ico",
            id: "17",
        },
        {
            name: "Wikipedia",
            url: "https://www.wikipedia.org",
            icon: "https://www.wikipedia.org/favicon.ico",
            id: "18",
        },
        {
            name: "Microsoft",
            url: "https://www.microsoft.com",
            icon: "https://www.microsoft.com/favicon.ico",
            id: "19",
        },
        {
            name: "Apple",
            url: "https://www.apple.com",
            icon: "https://www.apple.com/favicon.ico",
            id: "20",
        },
        {
            name: "CNN",
            url: "https://www.cnn.com",
            icon: "https://www.cnn.com/favicon.ico",
            id: "21",
        },
        {
            name: "BBC",
            url: "https://www.bbc.com",
            icon: "https://www.bbc.com/favicon.ico",
            id: "22",
        },
        {
            name: "Fox News",
            url: "https://www.foxnews.com",
            icon: "https://www.foxnews.com/favicon.ico",
            id: "23",
        },
        {
            name: "The Guardian",
            url: "https://www.theguardian.com",
            icon: "https://www.theguardian.com/favicon.ico",
            id: "24",
        },
        {
            name: "CNN Türk",
            url: "https://www.cnnturk.com",
            icon: "https://www.cnnturk.com/favicon.ico",
            id: "25",
        },
        {
            name: "Hürriyet",
            url: "https://www.hurriyet.com.tr",
            icon: "https://www.hurriyet.com.tr/favicon.ico",
            id: "26",
        },
        {
            name: "Milliyet",
            url: "https://www.milliyet.com.tr",
            icon: "https://www.milliyet.com.tr/favicon.ico",
            id: "27",
        },
        {
            name: "Sözcü",
            url: "https://www.sozcu.com.tr",
            icon: "https://www.sozcu.com.tr/favicon.ico",
            id: "28",
        },
        {
            name: "NTV",
            url: "https://www.ntv.com.tr",
            icon: "https://www.ntv.com.tr/favicon.ico",
            id: "29",
        },
        {
            name: "TRT Haber",
            url: "https://www.trthaber.com",
            icon: "https://www.trthaber.com/favicon.ico",
            id: "30",
        },
        {
            name: "Google News",
            url: "https://news.google.com",
            icon: "https://news.google.com/favicon.ico",
            id: "31",
        },
        {
            name: "Yahoo News",
            url: "https://news.yahoo.com",
            icon: "https://news.yahoo.com/favicon.ico",
            id: "32",
        },
        {
            name: "The New York Times",
            url: "https://www.nytimes.com",
            icon: "https://www.nytimes.com/favicon.ico",
            id: "33",
        },
        {
            name: "The Washington Post",
            url: "https://www.washingtonpost.com",
            icon: "https://www.washingtonpost.com/favicon.ico",
            id: "34",
        },
        {
            name: "The Guardian",
            url: "https://www.theguardian.com",
            icon: "https://www.theguardian.com/favicon.ico",
            id: "35",
        },
        {
            name: "Le Monde",
            url: "https://www.lemonde.fr",
            icon: "https://www.lemonde.fr/favicon.ico",
            id: "36",
        },
        {
            name: "Amazon",
            url: "https://www.amazon.com",
            icon: "https://www.amazon.com/favicon.ico",
            id: "37",
        },
        {
            name: "Ebay",
            url: "https://www.ebay.com",
            icon: "https://www.ebay.com/favicon.ico",
            id: "38",
        },
        {
            name: "Walmart",
            url: "https://www.walmart.com",
            icon: "https://www.walmart.com/favicon.ico",
            id: "39",
        },
        {
            name: "Target",
            url: "https://www.target.com",
            icon: "https://www.target.com/favicon.ico",
            id: "40",
        },
        {
            name: "Best Buy",
            url: "https://www.bestbuy.com",
            icon: "https://www.bestbuy.com/favicon.ico",
            id: "41",
        },
        {
            name: "Alibaba",
            url: "https://www.alibaba.com",
            icon: "https://www.alibaba.com/favicon.ico",
            id: "42",
        },
        {
            name: "AliExpress",
            url: "https://www.aliexpress.com",
            icon: "https://www.aliexpress.com/favicon.ico",
            id: "43",
        },
        {
            name: "Etsy",
            url: "https://www.etsy.com",
            icon: "https://www.etsy.com/favicon.ico",
            id: "44",
        },
        {
            name: "Google",
            url: "https://www.google.com",
            icon: "https://www.google.com/favicon.ico",
            id: "45",
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com",
            icon: "https://www.facebook.com/favicon.ico",
            id: "46",
        },
        {
            name: "YouTube",
            url: "https://www.youtube.com",
            icon: "https://www.youtube.com/favicon.ico",
            id: "47",
        },
        {
            name: "Amazon",
            url: "https://www.amazon.com",
            icon: "https://www.amazon.com/favicon.ico",
            id: "48",
        },
        {
            name: "Twitter",
            url: "https://www.twitter.com",
            icon: "https://www.twitter.com/favicon.ico",
            id: "49",
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com",
            icon: "https://www.instagram.com/favicon.ico",
            id: "50",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com",
            icon: "https://www.linkedin.com/favicon.ico",
            id: "51",
        },
        {
            name: "Netflix",
            url: "https://www.netflix.com",
            icon: "https://www.netflix.com/favicon.ico",
            id: "52",
        },
        {
            name: "Pinterest",
            url: "https://www.pinterest.com",
            icon: "https://www.pinterest.com/favicon.ico",
            id: "53",
        },
        {
            name: "Tumblr",
            url: "https://www.tumblr.com",
            icon: "https://www.tumblr.com/favicon.ico",
            id: "54",
        },
        {
            name: "Snapchat",
            url: "https://www.snapchat.com",
            icon: "https://www.snapchat.com/favicon.ico",
            id: "55",
        },
        {
            name: "Reddit",
            url: "https://www.reddit.com",
            icon: "https://www.reddit.com/favicon.ico",
            id: "56",
        },
        {
            name: "Wikipedia",
            url: "https://www.wikipedia.org",
            icon: "https://www.wikipedia.org/favicon.ico",
            id: "57",
        },
        {
            name: "Ebay",
            url: "https://www.ebay.com",
            icon: "https://www.ebay.com/favicon.ico",
            id: "58",
        },
        {
            name: "Yahoo",
            url: "https://www.yahoo.com",
            icon: "https://www.yahoo.com/favicon.ico",
            id: "59",
        },
        {
            name: "Microsoft",
            url: "https://www.microsoft.com",
            icon: "https://www.microsoft.com/favicon.ico",
            id: "60",
        },
        {
            name: "Apple",
            url: "https://www.apple.com",
            icon: "https://www.apple.com/favicon.ico",
            id: "61",
        },
        {
            name: "Twitch",
            url: "https://www.twitch.tv",
            icon: "https://www.twitch.tv/favicon.ico",
            id: "62",
        },
        {
            name: "WhatsApp",
            url: "https://www.whatsapp.com",
            icon: "https://www.whatsapp.com/favicon.ico",
            id: "63",
        },
        {
            name: "Spotify",
            url: "https://www.spotify.com",
            icon: "https://www.spotify.com/favicon.ico",
            id: "64",
        },
        {
            name: "Adobe",
            url: "https://www.adobe.com",
            icon: "https://www.adobe.com/favicon.ico",
            id: "65",
        },
    ];
    const [layout, setLayout] = useState([]);

    useEffect(() => {
        // Boş olan yerleri dolduracak layout'u oluştur
        const newLayout = bookmarksData.map((bookmark, index) => ({
            i: `${bookmark.id}-${bookmark.name}`,
            x: index % 13,
            y: Math.floor(index / 13) * 1,
            w: 1,
            h: 4,
        }));
        setLayout(newLayout);
        console.log("TEST ", newLayout);
    }, []);

    const onLayoutChange = (newLayout) => {
        setLayout(newLayout);
        console.log(newLayout);
    };

    return (
        <GridLayout
            className="layout"
            layout={layout}
            cols={13}
            rowHeight={30}
            width={window.innerWidth}
            onLayoutChange={onLayoutChange}
            maxRows={5}
            maxCols={13}
            style={{
                margin: "2px",
                padding: "2px",
                display: "flex",
            }}
        >
            {bookmarksData.map((bookmark) => (
                <div key={`${bookmark.id}-${bookmark.name}`} className="">
                    <a
                        className="flex flex-col items-center justify-between border-black border rounded-md w-full h-full"
                        // href={bookmark.url}
                        rel="noopener noreferrer"
                    >
                        <img
                            src={bookmark.icon}
                            className="w-20 h-20"
                            alt={bookmark.name}
                        />
                        <p>{bookmark.name}</p>
                    </a>
                </div>
            ))}
        </GridLayout>
    );
};

export default MainItem;
