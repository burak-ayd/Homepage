import PropTypes from "prop-types";

const MainItem = ({ name, url, icon, id }) => {
    return (
        <a
            className="bookmark-item block w-32 h-36 hover:bg-[#3d3d3d6b] overflow-hidden"
            href={url}
            key={id}
        >
            <div className="app-bookmark flex flex-col overflow-hidden items-center justify-center relative w-full h-full">
                <div className="icon-wrapper flex items-center justify-center flex-shrink-0 rounded-2xl overflow-hidden">
                    <div className="icon">
                        <img
                            className="w-20 h-20"
                            src={icon}
                            alt={name}
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className="title text-black text-center mt-[10%] background:text-black dark:text-white dark:text-base background:text-base text-ellipsis">
                    {name}
                </div>
            </div>
        </a>
    );
};
MainItem.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};
export default MainItem;
