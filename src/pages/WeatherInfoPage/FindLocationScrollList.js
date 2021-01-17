import React from 'react';

import banner from './images/banner.png';

class FindLocationScrollList extends React.Component {

    listItemClicked = (event) => {
        this.props.locationChoiceHasBeenMade(event.target.value)
    }

    render() {

        const locList = this.props.locationList;

        let listHeight = 45
        if (locList.length < 10) {
            listHeight = (20 * locList.length) + listHeight
        } else {
            listHeight = 200
        }
        listHeight = listHeight + 'px'

        const divStyle = {
                        backgroundColor: "#7A7278", 
                        borderRadius: "10px",
                        margin: "1px 0px 0px 0px", 
                        padding: "10px 10px 10px 10px",
                        opacity: "0.95",
                        width: "86%", 
                        overflowY: "scroll",
                        cursor: "pointer",
                        height: listHeight
        };
        
        const ulStyle = {
                        listStyle: "none", 
                        lineHeight: "190%",
                        textAlign: "left", 
                        fontSize: "16px",
                        color: "#FFFFFF", 
                        fontFamily: "inherit"
        };

        const liStyle = {
                        padding: "0px 5px 0px 5px",
        };

        let locationList = locList.map(loc => {         
            return(
                
                <li style={liStyle} onClick={this.listItemClicked} value={loc['locationId']}>{loc['locationName']}, {loc['country']}</li>
            
            );
        });

        return (
            <div style={divStyle}>
                <ul style={ulStyle}>
            
                    {locationList}

                </ul>
            </div>
    );

    }

}

export default FindLocationScrollList;
