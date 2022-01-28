import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <h1>
          <Icon icon={locationIcon} /> Wildfires, <Icon icon="wi:earthquake" />{" "}
          Earthquakes, <Icon icon="wi:volcano" /> Volcanoes (Powered by NASA)
        </h1>
      </header>
    </div>
  );
};

export default Header;
