import { Search } from "react-bootstrap-icons";
import { Dropdown } from "react-bootstrap";
import { SortAlphaDown } from "react-bootstrap-icons";
import { SortAlphaDownAlt } from "react-bootstrap-icons";
import { GridFill } from "react-bootstrap-icons";

export const SearchBar = ({sortBy, orderBy, onSearchChange, onSortByChange, onOrderByChange}) => {
    return(
        <div className="search-section">
            <span className="search-bar">
                <button>
                    <Search />
                </button>
                <input type="search" placeholder="Search..." onChange={(e) => onSearchChange(e.target.value)}/>
            </span>

                <Dropdown>
                    <Dropdown.Toggle className="dropdown-sort">
                        <GridFill />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <div className="dropdown-checkbox">
                            <label><input type="checkbox" onChange={(e) => onSortByChange(e.target["value"])} value="title" checked={(sortBy === "title")? "checked": ""} readOnly/> Title</label>
                        </div>
                        <div className="dropdown-checkbox">
                            <label><input type="checkbox" onChange={(e) => onSortByChange(e.target.value)} value="language" checked={(sortBy === "language")? "checked": ""} readOnly/>Language</label>
                        </div>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle className="dropdown-sort">
                        {(orderBy === "asc") ?  <SortAlphaDown /> : <SortAlphaDownAlt />}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <div className="dropdown-checkbox">
                            <label><input type="checkbox" onChange={(e) => onOrderByChange(e.target.value)} value="asc" checked={(orderBy === "asc")? "checked": ""}/>Ascending</label>
                        </div>
                        <div className="dropdown-checkbox">
                            <label><input type="checkbox" onChange={(e) => onOrderByChange(e.target.value)} value="desc" checked={(orderBy === "desc")? "checked": ""}/>Descending</label>
                        </div>
                    </Dropdown.Menu>
                </Dropdown>

        </div>
    )
}
