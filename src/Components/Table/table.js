import React from 'react'
// import { Link } from "react-router-dom";
import styles from "./table.module.css"
import edit from "../../assets/tableIcons/edit.svg"
import remDelete from "../../assets/tableIcons/delete.svg"
import loupe from "../../assets/headerIcons/loupe.svg"


export default class TableComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            headings : [
                {
                    name: "Id",
                    type: "Normal"
                },
                {
                    name: "Models",
                    type: "Normal"
                },
                {
                    name: "Service",
                    type: "Normal"
                },
                {
                    name: "Status",
                    type: "Status"
                },
                {
                    name: "Assigned To",
                    type: "Drop Down"
                },
                {
                    name: "Due Date",
                    type: "Date Box"
                },
                {
                    name: "Customer",
                    type: "Normal"
                },
                {
                    name: "Total",
                    type: "Normal"
                },
                {
                    name: "Actions",
                    type: "Normal"
                }
            ]
        }  
    }


    render(){
        return(
                <div>
                <div className = { styles.container }>
                    <div className = { styles.tableHead } >
                        <div className = { styles.tableHeadText } >
                            Manage All Tickets
                        </div>
                        <div className = { styles.tableHeadOptions } >
                            <div className = { styles.button } >Export</div>
                            <div className = { styles.buttonFilled } >Create Ticket</div>
                        </div>
                    </div>
                    <div className = { styles.tableMenu } >
                        <div className = { styles.tableHeadSearch } >
                            {/* <div className = { styles.menuItem } >All</div>
                            <div className = { styles.menuItemSelected } >Repairs</div> */}
                            <input className={ styles.search } type="text" placeholder="Search" />
                            <img alt="" className={ styles.icon }  src= { loupe } />
                        </div>
                        <div className = { styles.tableMenuText } >
                            <div className = { styles.dotOrange } ></div>
                            <div className = { styles.dotText } >Open</div>
                            <div className = { styles.dotBlue } ></div>
                            <div className = { styles.dotText } >On Hold</div>
                            <div className = { styles.dotRed } ></div>
                            <div className = { styles.dotText } >Cancelled</div>
                            <div className = { styles.dotGreen } ></div>
                            <div className = { styles.dotText } >Closed</div>
                        </div>
                        
                    </div>
                    <div className = { styles.mainTable } >
                        <div id="tableScroll" className = { styles.tableScroll } >
                            <table id="main-table" className = { styles.mainTable } >
                                <thead>
                                <tr>
                                    {/* Here itearation needs to be added */}

                                    
                                    <th scope="col" >ID</th>
                                    <th scope="col" >Head 1</th>
                                    <th scope="col" >Head 2</th>
                                    <th scope="col" >Head 3</th>
                                    <th scope="col" >Head 4</th>
                                    <th scope="col" >Head 5</th>
                                    <th scope="col" >Head 6</th>
                                    <th scope="col" >Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th>001</th>
                                    <td>Cell content
                                    test </td>
                                    <td><a href="# " >Cell content longer</a></td>
                                    <td>Cell content with more content and more content Cell </td>
                                    <td>Cell content</td>
                                    <td>Cell content</td>
                                    <td>Cell content</td>
                                    <th>
                                        <div className = { styles.actionButton } > 
                                            <img alt="" src = { edit } />
                                            <img alt="" src = { remDelete } />
                                        </div>
                                    </th>
                                </tr>
                                <tr>
                                    <th>002</th>
                                    <td>Cell content</td>
                                    <td>Cell content longer</td>
                                    <td>Cell content</td>
                                    <td>Cell content</td>
                                    <td>Cell content</td>
                                    <td>Cell content</td>
                                    <th>
                                        <div className = { styles.actionButton } > 
                                            <img alt="" src = { edit } />
                                            <img alt="" src = { remDelete } />
                                        </div>
                                    </th>
                                </tr>
                                <tr>
                                    <th>003</th>
                                    <td>Cell content</td>
                                    <td>Cell content longer</td>
                                    <td>Cell content</td>
                                    <td>Cell content</td>
                                    <td>Cell content</td>
                                    <td>Cell content</td>
                                    <th>
                                        <div className = { styles.actionButton } > 
                                            <img alt="" src = { edit } />
                                            <img alt="" src = { remDelete } />
                                        </div>
                                    </th>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>
                <div className = { styles.tableFooter } >
                    <div className = { styles.tableFootText } >
                        Showing 2 of 2
                    </div>
                    <div className = { styles.tableFootOptions } >
                        <div className = { styles.button } >&lt;</div>
                        <div className = { styles.buttonFilled } >1</div>
                        <div className = { styles.button } >&gt;</div>
                    </div>
                </div>
                </div>
    )
    }

}