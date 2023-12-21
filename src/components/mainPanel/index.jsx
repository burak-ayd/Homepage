import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import MainItem from "./item";

const MainPanel = () => {
    const [items, setItems] = useState([
        {
            name: "Google",
            icon: "https://www.google.com/favicon.ico",
            url: "https://www.google.com",
            id: "1",
        },
        {
            name: "Facebook",
            icon: "https://www.facebook.com/favicon.ico",
            url: "https://www.facebook.com",
            id: "2",
        },
        {
            name: "YouTube",
            icon: "https://www.youtube.com/favicon.ico",
            url: "https://www.youtube.com",
            id: "3",
        },
        {
            name: "Amazon",
            icon: "https://www.amazon.com/favicon.ico",
            url: "https://www.amazon.com",
            id: "4",
        },
        {
            name: "Twitter",
            icon: "https://www.twitter.com/favicon.ico",
            url: "https://www.twitter.com",
            id: "5",
        },
        {
            name: "Instagram",
            icon: "https://www.instagram.com/favicon.ico",
            url: "https://www.instagram.com",
            id: "6",
        },
        {
            name: "LinkedIn",
            icon: "https://www.linkedin.com/favicon.ico",
            url: "https://www.linkedin.com",
            id: "7",
        },
        {
            name: "Netflix",
            icon: "https://www.netflix.com/favicon.ico",
            url: "https://www.netflix.com",
            id: "8",
        },
        {
            name: "Pinterest",
            icon: "https://www.pinterest.com/favicon.ico",
            url: "https://www.pinterest.com",
            id: "9",
        },
        {
            name: "Reddit",
            icon: "https://www.reddit.com/favicon.ico",
            url: "https://www.reddit.com",
            id: "10",
        },
        {
            name: "Tumblr",
            icon: "https://www.tumblr.com/favicon.ico",
            url: "https://www.tumblr.com",
            id: "11",
        },
        {
            name: "Wikipedia",
            icon: "https://www.wikipedia.org/favicon.ico",
            url: "https://www.wikipedia.org",
            id: "12",
        },
        {
            name: "Ebay",
            icon: "https://www.ebay.com/favicon.ico",
            url: "https://www.ebay.com",
            id: "13",
        },
        {
            name: "AliExpress",
            icon: "https://www.aliexpress.com/favicon.ico",
            url: "https://www.aliexpress.com",
            id: "14",
        },
        {
            name: "Yahoo",
            icon: "https://www.yahoo.com/favicon.ico",
            url: "https://www.yahoo.com",
            id: "15",
        },
        {
            name: "Bing",
            icon: "https://www.bing.com/favicon.ico",
            url: "https://www.bing.com",
            id: "16",
        },
        {
            name: "Twitch",
            icon: "https://www.twitch.tv/favicon.ico",
            url: "https://www.twitch.tv",
            id: "17",
        },
        {
            name: "WhatsApp",
            icon: "https://www.whatsapp.com/favicon.ico",
            url: "https://www.whatsapp.com",
            id: "18",
        },
        {
            name: "Snapchat",
            icon: "https://www.snapchat.com/favicon.ico",
            url: "https://www.snapchat.com",
            id: "19",
        },
        {
            name: "Quora",
            icon: "https://www.quora.com/favicon.ico",
            url: "https://www.quora.com",
            id: "20",
        },
        {
            name: "Microsoft",
            icon: "https://www.microsoft.com/favicon.ico",
            url: "https://www.microsoft.com",
            id: "21",
        },
        {
            name: "Apple",
            icon: "https://www.apple.com/favicon.ico",
            url: "https://www.apple.com",
            id: "22",
        },
        {
            name: "Spotify",
            icon: "https://www.spotify.com/favicon.ico",
            url: "https://www.spotify.com",
            id: "23",
        },
        {
            name: "TikTok",
            icon: "https://www.tiktok.com/favicon.ico",
            url: "https://www.tiktok.com",
            id: "24",
        },
        {
            name: "Zoom",
            icon: "https://www.zoom.us/favicon.ico",
            url: "https://www.zoom.us",
            id: "25",
        },
        {
            name: "Gmail",
            icon: "https://www.gmail.com/favicon.ico",
            url: "https://www.gmail.com",
            id: "26",
        },
        {
            name: "Outlook",
            icon: "https://www.outlook.com/favicon.ico",
            url: "https://www.outlook.com",
            id: "27",
        },
        {
            name: "Yahoo Mail",
            icon: "https://www.mail.yahoo.com/favicon.ico",
            url: "https://www.mail.yahoo.com",
            id: "28",
        },
        {
            name: "Netflix",
            icon: "https://www.netflix.com/favicon.ico",
            url: "https://www.netflix.com",
            id: "29",
        },
        {
            name: "Spotify",
            icon: "https://www.spotify.com/favicon.ico",
            url: "https://www.spotify.com",
            id: "30",
        },
        {
            name: "Google",
            icon: "https://www.google.com/favicon.ico",
            url: "https://www.google.com",
            id: 31,
        },
        {
            name: "Facebook",
            icon: "https://www.facebook.com/favicon.ico",
            url: "https://www.facebook.com",
            id: 32,
        },
        {
            name: "YouTube",
            icon: "https://www.youtube.com/favicon.ico",
            url: "https://www.youtube.com",
            id: 33,
        },
        {
            name: "Amazon",
            icon: "https://www.amazon.com/favicon.ico",
            url: "https://www.amazon.com",
            id: 34,
        },
        {
            name: "Twitter",
            icon: "https://www.twitter.com/favicon.ico",
            url: "https://www.twitter.com",
            id: 35,
        },
        {
            name: "Instagram",
            icon: "https://www.instagram.com/favicon.ico",
            url: "https://www.instagram.com",
            id: 36,
        },
        {
            name: "LinkedIn",
            icon: "https://www.linkedin.com/favicon.ico",
            url: "https://www.linkedin.com",
            id: 37,
        },
        {
            name: "Pinterest",
            icon: "https://www.pinterest.com/favicon.ico",
            url: "https://www.pinterest.com",
            id: 38,
        },
        {
            name: "Snapchat",
            icon: "https://www.snapchat.com/favicon.ico",
            url: "https://www.snapchat.com",
            id: 39,
        },
        {
            name: "Tumblr",
            icon: "https://www.tumblr.com/favicon.ico",
            url: "https://www.tumblr.com",
            id: 40,
        },
        {
            name: "Netflix",
            icon: "https://www.netflix.com/favicon.ico",
            url: "https://www.netflix.com",
            id: 41,
        },
        {
            name: "Spotify",
            icon: "https://www.spotify.com/favicon.ico",
            url: "https://www.spotify.com",
            id: 42,
        },
        {
            name: "Ebay",
            icon: "https://www.ebay.com/favicon.ico",
            url: "https://www.ebay.com",
            id: 43,
        },
        {
            name: "Reddit",
            icon: "https://www.reddit.com/favicon.ico",
            url: "https://www.reddit.com",
            id: 44,
        },
        {
            name: "Wikipedia",
            icon: "https://www.wikipedia.org/favicon.ico",
            url: "https://www.wikipedia.org",
            id: 45,
        },
        {
            name: "Craigslist",
            icon: "https://www.craigslist.org/favicon.ico",
            url: "https://www.craigslist.org",
            id: 46,
        },
        {
            name: "IMDb",
            icon: "https://www.imdb.com/favicon.ico",
            url: "https://www.imdb.com",
            id: 47,
        },
        {
            name: "GitHub",
            icon: "https://www.github.com/favicon.ico",
            url: "https://www.github.com",
            id: 48,
        },
        {
            name: "Stack Overflow",
            icon: "https://stackoverflow.com/favicon.ico",
            url: "https://stackoverflow.com",
            id: 49,
        },
        {
            name: "Medium",
            icon: "https://www.medium.com/favicon.ico",
            url: "https://www.medium.com",
            id: 50,
        },
        {
            name: "Etsy",
            icon: "https://www.etsy.com/favicon.ico",
            url: "https://www.etsy.com",
            id: 51,
        },
        {
            name: "WhatsApp",
            icon: "https://www.whatsapp.com/favicon.ico",
            url: "https://www.whatsapp.com",
            id: 52,
        },
        {
            name: "Twitch",
            icon: "https://www.twitch.tv/favicon.ico",
            url: "https://www.twitch.tv",
            id: 53,
        },
        {
            name: "Microsoft",
            icon: "https://www.microsoft.com/favicon.ico",
            url: "https://www.microsoft.com",
            id: 54,
        },
        {
            name: "Yahoo",
            icon: "https://www.yahoo.com/favicon.ico",
            url: "https://www.yahoo.com",
            id: 55,
        },
        {
            name: "Gmail",
            icon: "https://mail.google.com/favicon.ico",
            url: "https://mail.google.com",
            id: 56,
        },
        {
            name: "Apple",
            icon: "https://www.apple.com/favicon.ico",
            url: "https://www.apple.com",
            id: 57,
        },
        {
            name: "CNN",
            icon: "https://www.cnn.com/favicon.ico",
            url: "https://www.cnn.com",
            id: 58,
        },
        {
            name: "BBC",
            icon: "https://www.bbc.co.uk/favicon.ico",
            url: "https://www.bbc.co.uk",
            id: 59,
        },
        {
            name: "Instagram",
            icon: "https://www.instagram.com/favicon.ico",
            url: "https://www.instagram.com",
            id: 60,
        },
        {
            name: "LinkedIn",
            icon: "https://www.linkedin.com/favicon.ico",
            url: "https://www.linkedin.com",
            id: 61,
        },
        {
            name: "Pinterest",
            icon: "https://www.pinterest.com/favicon.ico",
            url: "https://www.pinterest.com",
            id: 62,
        },
        {
            name: "Snapchat",
            icon: "https://www.snapchat.com/favicon.ico",
            url: "https://www.snapchat.com",
            id: 63,
        },
        {
            name: "Tumblr",
            icon: "https://www.tumblr.com/favicon.ico",
            url: "https://www.tumblr.com",
            id: 64,
        },
        {
            name: "Netflix",
            icon: "https://www.netflix.com/favicon.ico",
            url: "https://www.netflix.com",
            id: 65,
        },
    ]);

    // grid size 5x13

    const onDragEnd = (result) => {
        console.log(result);
        if (!result.destination) {
            return;
        }

        const newItems = Array.from(items);
        const [movedItem] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, movedItem);

        const updatedItems = newItems.map((item, index) => ({
            ...item,
            index: index + 1,
        }));

        setItems(updatedItems);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable" direction="null">
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="flex flex-wrap justify-center"
                    >
                        {items.map((item, index) => (
                            <MainItem
                                key={item.id - 1}
                                id={item.id}
                                text={item.name}
                                imageSrc={item.icon}
                                index={index}
                                url={item.url}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default MainPanel;
