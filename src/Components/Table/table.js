import React from 'react'
import { Link } from "react-router-dom";
import styles from "./table.module.css"
import edit from "../../assets/tableIcons/edit.svg"
import remDelete from "../../assets/tableIcons/delete.svg"
import printer from "../../assets/tableIcons/printer.png"


export default class TableComponent extends React.Component{

    render(){
        return(
            
                <div className = { styles.container }>
                    <div className = { styles.tableHead } >
                        <div className = { styles.tableHeadText } >
                            Manage Ticket
                        </div>
                        <div className = { styles.tableHeadOptions } >
                            <div className = { styles.button } >Export</div>
                            <div className = { styles.buttonFilled } >Create Ticket</div>
                        </div>
                    </div>
                    <div className = { styles.tableMenu } >
                        <div className = { styles.tableHeadOptions } >
                            <div className = { styles.menuItem } >All</div>
                            <div className = { styles.menuItemSelected } >Repairs</div>
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
                                    <th>First top Column</th>
                                    <td>Cell content
                                    test </td>
                                    <td><a href="# " >Cell content longer</a></td>
                                    <td>Cell content with more content and more content Cell </td>
                                    <td>Cell content</td>
                                    <td>Cell content</td>
                                    <td>Cell content</td>
                                    <th>
                                        <div className = { styles.actionButton } > 
                                            <img src = { edit } alt="" />
                                            <img src = { remDelete } alt="" />
                                            <img src = { printer } alt="" />
                                        </div>
                                    </th>
                                </tr>
                                <tr>
                                    <th>Left Column</th>
                                    <td>Cell content</td>
                                    <td>Cell content longer</td>
                                    <td>Cell content</td>
                                    <td>Cell content</td>
                                    <td>Cell content</td>
                                    <td>Cell content</td>
                                    <th>
                                        <div className = { styles.actionButton } > 
                                            <img src = { edit } alt="" />
                                            <img src = { remDelete } alt="" />
                                            <img src = { printer } alt="" />
                                        </div>
                                    </th>
                                </tr>
                                <tr>
                                    <th>Left Column
                                    last</th>
                                    <td>Cell content</td>
                                    <td>Cell content longer</td>
                                    <td>Cell content</td>
                                    <td>Cell content</td>
                                    <td>Cell content</td>
                                    <td>Cell content</td>
                                    <th>
                                        <div className = { styles.actionButton } > 
                                            <img src = { edit } alt="" />
                                            <img src = { remDelete } alt="" />
                                            <img src = { printer } alt="" />
                                        </div>
                                    </th>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
    )
    }

}