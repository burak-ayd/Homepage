import PropTypes from "prop-types";
const MainItem = ({ name, url, icon, id }) => {
    return (
        <a
            className="bookmark-item my-1 last:mb-0  w-[125px] h-[125px] hover:bg-[#3d3d3d6b] text-ellipsis"
            href={url}
        >
            <div className="app-bookmark flex flex-col overflow-hidden items-center justify-center relative w-full h-full">
                <div className="icon-wrapper flex items-center justify-center w-12 h-12 flex-shrink-0 rounded-2xl overflow-hidde">
                    <div
                        className="icon flex justify-center bg-cover bg-center w-full h-full"
                        style={{ backgroundImage: `url(${icon})` }}
                    ></div>
                </div>
                <div className="title text-center mt-[10%]">{name}</div>
            </div>
        </a>
    );
};
MainItem.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};
export default MainItem;
