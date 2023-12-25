import MainItem from "./item/index";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable/dist";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import PropTypes from "prop-types";
import { rectSwappingStrategy } from "@dnd-kit/sortable/dist";

const SortableBookmark = ({ item }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({
            id: item.id,
            transition: {
                duration: 150, // milliseconds
                easing: "cubic-bezier(0.25, 1, 0.5, 1)",
            },
            transform: ({ translate }) => {
                return `translate3d(${translate.x}px, ${
                    translate.y
                }px, 0) scale(${translate.scale ?? 1})`;
            },
        });
    const style = {
        transform: CSS.Translate.toString(transform),
        // Adjust the duration as needed
        transition,
    };
    console.log(style);
    return (
        <div ref={setNodeRef} {...listeners} {...attributes} style={style}>
            <MainItem
                key={item.id}
                name={item.name}
                url={item.url}
                icon={item.icon}
                id={item.id}
            />
        </div>
    );
};

SortableBookmark.propTypes = {
    item: PropTypes.object,
};

const MainPanel = () => {
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
            icon: "https://static.whatsapp.net/rsrc.php/v3/yz/r/ujTY9i_Jhs1.png",
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
            icon: "https://i01.sozcucdn.com/wp-content/themes/Sozcu_V4/assets/images/favicon.png",
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
            icon: "https://lh3.googleusercontent.com/-DR60l-K8vnyi99NZovm9HlXyZwQ85GMDxiwJWzoasZYCUrPuUM_P_4Rb7ei03j-0nRs0c4F=w32",
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
            icon: "https://static.whatsapp.net/rsrc.php/v3/yz/r/ujTY9i_Jhs1.png",
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
        {
            name: "Google",
            url: "https://www.google.com",
            icon: "https://www.google.com/favicon.ico",
            id: 66,
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com",
            icon: "https://www.facebook.com/favicon.ico",
            id: 67,
        },
        {
            name: "YouTube",
            url: "https://www.youtube.com",
            icon: "https://www.youtube.com/favicon.ico",
            id: 68,
        },
        {
            name: "Amazon",
            url: "https://www.amazon.com",
            icon: "https://www.amazon.com/favicon.ico",
            id: 69,
        },
        {
            name: "Twitter",
            url: "https://www.twitter.com",
            icon: "https://www.twitter.com/favicon.ico",
            id: 70,
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com",
            icon: "https://www.instagram.com/favicon.ico",
            id: 71,
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com",
            icon: "https://www.linkedin.com/favicon.ico",
            id: 72,
        },
        {
            name: "Netflix",
            url: "https://www.netflix.com",
            icon: "https://www.netflix.com/favicon.ico",
            id: 73,
        },
        {
            name: "Pinterest",
            url: "https://www.pinterest.com",
            icon: "https://www.pinterest.com/favicon.ico",
            id: 74,
        },
        {
            name: "Tumblr",
            url: "https://www.tumblr.com",
            icon: "https://www.tumblr.com/favicon.ico",
            id: 75,
        },
        {
            name: "Etsy",
            url: "https://www.etsy.com",
            icon: "https://www.etsy.com/favicon.ico",
            id: 76,
        },
        {
            name: "Wikipedia",
            url: "https://www.wikipedia.org",
            icon: "https://www.wikipedia.org/favicon.ico",
            id: 77,
        },
        {
            name: "Reddit",
            url: "https://www.reddit.com",
            icon: "https://www.reddit.com/favicon.ico",
            id: 78,
        },
        {
            name: "Yahoo",
            url: "https://www.yahoo.com",
            icon: "https://www.yahoo.com/favicon.ico",
            id: 79,
        },
        {
            name: "Bing",
            url: "https://www.bing.com",
            icon: "https://www.bing.com/favicon.ico",
            id: 80,
        },
        {
            name: "GitHub",
            url: "https://www.github.com",
            icon: "https://www.github.com/favicon.ico",
            id: 81,
        },
        {
            name: "Stack Overflow",
            url: "https://www.stackoverflow.com",
            icon: "https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico?v=ec617d715196",
            id: 82,
        },
        {
            name: "Medium",
            url: "https://www.medium.com",
            icon: "https://www.medium.com/favicon.ico",
            id: 83,
        },
        {
            name: "Twitch",
            url: "https://www.twitch.tv",
            icon: "https://www.twitch.tv/favicon.ico",
            id: 84,
        },
        {
            name: "IMDb",
            url: "https://www.imdb.com",
            icon: "https://www.imdb.com/favicon.ico",
            id: 85,
        },
        {
            name: "CNN",
            url: "https://www.cnn.com",
            icon: "https://www.cnn.com/favicon.ico",
            id: 86,
        },
        {
            name: "BBC",
            url: "https://www.bbc.com",
            icon: "https://www.bbc.com/favicon.ico",
            id: 87,
        },
        {
            name: "Ebay",
            url: "https://www.ebay.com",
            icon: "https://www.ebay.com/favicon.ico",
            id: 88,
        },
        {
            name: "PayPal",
            url: "https://www.paypal.com",
            icon: "https://www.paypal.com/favicon.ico",
            id: 89,
        },
        {
            name: "PayPal",
            url: "https://www.paypal.com",
            icon: "https://www.paypal.com/favicon.ico",
            id: 90,
        },
    ];

    const [bookmarks, setBookmarks] = useState(bookmarksData);

    const onDragEnd = (event) => {
        const { active, over } = event;

        if (active.id !== over.id) {
            const oldIndex = bookmarks.findIndex(
                (item) => item.id === active.id
            );
            const newIndex = bookmarks.findIndex((item) => item.id === over.id);

            const newBookmarksData = [...bookmarks];

            newBookmarksData.splice(oldIndex, 1);
            newBookmarksData.splice(newIndex, 0, bookmarks[oldIndex]);

            setBookmarks(newBookmarksData);
        }
    };

    return (
        <div className="block p-5 w-full h-full overflow-hidden box-border z-10">
            <DndContext
                collisionDetection={closestCenter}
                onDragEnd={onDragEnd}
            >
                <SortableContext
                    items={bookmarks.map((item) => item.id)}
                    strategy={rectSwappingStrategy}
                >
                    <div className="draggable grid grid-cols-15 grid-rows-6 last:mb-0 w-full h-full">
                        {bookmarks.map((item) => (
                            <SortableBookmark key={item.id} item={item} />
                        ))}
                    </div>
                </SortableContext>
            </DndContext>
        </div>
    );
};

export default MainPanel;
