import React from 'react'
import Header from '../../Components/Header/header'
// import PointOfSale from '../../Components/POS/pointOfSale'
// import TableComponent from '../../Components/Table/table'
// import { Switch,Route } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
import styles from './home.module.css'
import bug from '../../assets/iconsExtra/bug.svg'
import square from '../../assets/iconsExtra/square.svg'
import threeDots from '../../assets/tableIcons/edit.svg'
import AutoComplete from '../../Components/AutoComplete/autocomplete'
const image = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiMwMDAwMDAiPjxwYXRoIGQ9Ik0xMjIuNTQzMjgsMjkuMjU2OGMtMC44OTMzLC0wLjA0MTIyIC0xLjc2OTI0LDAuMDEyMzggLTIuNjA2ODgsMC4xNjc5N2MtMS42NzUyNywwLjMxMTE4IC0zLjIwMDUzLDEuMDMzNzMgLTQuNDE0MjIsMi4yNDc0MmwtNzIuMDE4MjgsNzIuMDMxNzJjLTAuMTY0MzQsMC4xNjQ5MyAtMC4yOTM0OCwwLjM2MTUgLTAuMzc5NjEsMC41Nzc4MWwtMTMuNzYsMzQuNGMtMC4yNTU0OSwwLjYzODQ0IC0wLjEwNjIxLDEuMzY3NjkgMC4zNzk2MSwxLjg1NDM4bDEuNzIsMS43MmMwLjQ4NjY4LDAuNDg1ODIgMS4yMTU5NCwwLjYzNTEgMS44NTQzOCwwLjM3OTYxbDM0LjQsLTEzLjc2YzAuMjE2MzEsLTAuMDg2MTMgMC40MTI4OCwtMC4yMTUyNyAwLjU3NzgxLC0wLjM3OTYxbDcyLjAzMTcyLC03Mi4wMjE2NGMyLjQyNzI5LC0yLjQyNzI5IDIuODk1NTQsLTYuMDk0MTQgMi4wMTg5OCwtOS43MzU0N2MtMC44NzY1NiwtMy42NDEzMyAtMy4wNjk5MSwtNy40MzcxIC02LjM1OTMsLTEwLjcyNjQ4Yy0zLjI4OTQ0LC0zLjI4OTQ0IC03LjA4ODEyLC01LjQ4Mjc2IC0xMC43Mjk4NCwtNi4zNTkzYy0wLjkxMDQzLC0wLjIxOTEzIC0xLjgyMTA4LC0wLjM1NTE4IC0yLjcxNDM4LC0wLjM5NjR6TTEyMS40ODg0NCwzMi42ODY3MmMwLjg5MTE2LC0wLjA0ODI2IDEuODg0NjgsMC4wNTIwNyAyLjk2NjMzLDAuMzEyNDJjMi44ODQzOSwwLjY5NDI1IDYuMjEzNDcsMi41NTg0NyA5LjEwMDU1LDUuNDQ1NTVjMi44ODcxNCwyLjg4NzE0IDQuNzUxMzEsNi4yMTY2MyA1LjQ0NTU1LDkuMTAwNTVjMC42OTQyMywyLjg4MzkyIDAuMjQ0NjgsNS4xNDM3NiAtMS4xMDg1OSw2LjQ5NzAzbC00LjMzNjk1LDQuMzM2OTVsLTEuMzY3MjcsLTEuMzY3MjdjLTAuMTYyMDQsLTAuMTY3NDcgLTAuMzg1MDksLTAuMjYyMDMgLTAuNjE4MTIsLTAuMjYyMDNjLTAuMzUwNCwwLjAwMDA3IC0wLjY2NTczLDAuMjEyNzEgLTAuNzk3MTQsMC41Mzc1NGMtMC4xMzE0MSwwLjMyNDgzIC0wLjA1MjYyLDAuNjk2OSAwLjE5OTE3LDAuOTQwNTlsMS4zNjcyNywxLjM2NzI3bC0zLjE5MTQsMy4xOTE0bC0xOS45MzQ1MywtMTkuOTM0NTNsMy4wODM5LC0zLjA4MzlsMTUuMTI3MjcsMTUuMTI3MjdjMC4yMTU3MSwwLjIyNDY0IDAuNTM2LDAuMzE1MTIgMC44MzczNywwLjIzNjU1YzAuMzAxMzYsLTAuMDc4NTcgMC41MzY3MSwtMC4zMTM5MiAwLjYxNTI4LC0wLjYxNTI4YzAuMDc4NTcsLTAuMzAxMzYgLTAuMDExOTEsLTAuNjIxNjYgLTAuMjM2NTUsLTAuODM3MzdsLTE1LjEyNzI3LC0xNS4xMjcyN2w0LjQ0NDQ1LC00LjQ0NDQ1YzAuNjc2NTksLTAuNjc2NTkgMS41NzkyMSwtMS4xMjg5MyAyLjY3NDA2LC0xLjMyMzU5YzAuMjczNzEsLTAuMDQ4NjcgMC41NTk1OSwtMC4wODEzMyAwLjg1NjY0LC0wLjA5NzQyek0xMDcuOTk3MTksNDQuMDY4MjhsMTkuOTM0NTMsMTkuOTM0NTNsLTMuMjI4MzYsMy4yMjgzNmwtMTkuOTM0NTMsLTE5LjkzNDUzek0xMDIuMzM2NjQsNDkuNzI4ODNsMi40NDU2MiwyLjQ0NTYybC01NS4xODc4MSw1NS4xODc4MWwtMi40NDIyNywtMi40NDIyN3pNMTA1Ljk5ODM2LDUzLjM5MDU1bDMuMTYxMTcsMy4xNjExN2wtNTUuMTg0NDUsNTUuMTkxMTdsLTMuMTY0NTMsLTMuMTY0NTN6TTExMC4zNzU2Myw1Ny43Njc4MWwzLjkwMDIzLDMuOTAwMjNsLTMuOTQzOTEsMy45NDM5Yy0wLjIyNDY0LDAuMjE1NzEgLTAuMzE1MTIsMC41MzYgLTAuMjM2NTUsMC44MzczN2MwLjA3ODU3LDAuMzAxMzYgMC4zMTM5MiwwLjUzNjcxIDAuNjE1MjgsMC42MTUyOGMwLjMwMTM2LDAuMDc4NTcgMC42MjE2NiwtMC4wMTE5MSAwLjgzNzM3LC0wLjIzNjU1bDMuOTQzOSwtMy45NDM5MWwzLjA4MzkxLDMuMDgzOTFsLTQ2LjA4MzkxLDQ2LjA4MzljLTAuMjI0NjQsMC4yMTU3MSAtMC4zMTUxMiwwLjUzNiAtMC4yMzY1NSwwLjgzNzM3YzAuMDc4NTcsMC4zMDEzNiAwLjMxMzkyLDAuNTM2NzEgMC42MTUyOCwwLjYxNTI4YzAuMzAxMzYsMC4wNzg1NyAwLjYyMTY2LC0wLjAxMTkxIDAuODM3MzcsLTAuMjM2NTVsNDYuMDgzOSwtNDYuMDgzOTFsMi40NzkyMiwyLjQ3OTIybC01NS4xOTExNyw1NS4xODQ0NWwtNi43NzU4NiwtNi43NzU4Nmw0Ny44MDM5MSwtNDcuODAzOWMwLjI1MzA5LC0wLjI0NzQzIDAuMzI4NzUsLTAuNjI0NjQgMC4xOTA2NywtMC45NTA1NGMtMC4xMzgwOCwtMC4zMjU5IC0wLjQ2MTcxLC0wLjUzMzkzIC0wLjgxNTUyLC0wLjUyNDIzYy0wLjIyMzE5LDAuMDA2MjEgLTAuNDM1MjEsMC4wOTg5NyAtMC41OTEyNSwwLjI1ODY3bC00Ny44MDM5LDQ3LjgwMzkxbC0zLjg5Njg4LC0zLjg5Njg3ek00NS4zNDgyLDEwNy45ODAzOWwxOC42NzE0MSwxOC42NzE0MWwtMTkuNTA3ODksNy44MDM4M2wtNi45NjczNCwtNi45NjczNHpNNjkuNjQzMiwxMTUuMjMzMjhjLTAuMjIzMTksMC4wMDYyMSAtMC40MzUyMSwwLjA5ODk3IC0wLjU5MTI1LDAuMjU4NjdsLTEuNzIsMS43MmMtMC4yMjQ2NCwwLjIxNTcxIC0wLjMxNTEyLDAuNTM2IC0wLjIzNjU1LDAuODM3MzdjMC4wNzg1NywwLjMwMTM2IDAuMzEzOTIsMC41MzY3MSAwLjYxNTI4LDAuNjE1MjhjMC4zMDEzNiwwLjA3ODU3IDAuNjIxNjYsLTAuMDExOTEgMC44MzczNywtMC4yMzY1NWwxLjcyLC0xLjcyYzAuMjUzMDksLTAuMjQ3NDMgMC4zMjg3NSwtMC42MjQ2NCAwLjE5MDY3LC0wLjk1MDU0Yy0wLjEzODA4LC0wLjMyNTkgLTAuNDYxNzEsLTAuNTMzOTMgLTAuODE1NTIsLTAuNTI0MjN6TTM2Ljg0ODk4LDEyOS4yMjUwOGw1LjkyNTk0LDUuOTI1OTRsLTkuNjgxNzIsMy44N2wtMC4xMTQyMiwtMC4xMTQyMnoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="

export default class Home extends React.Component{
    

    logout(){
        localStorage.setItem('loggedIn', 'false');
        this.setState(this.state)
        window.location.href = "/"
    }

    constructor(props) {
    super(props);
    
        this.state = {
            isShow: true,
            activeItem: 'Repair',
            loggedIn: false
        };
    }

    showSubMenu(menuName){
        this.state.activeItem = menuName
        this.setState(this.state)
        console.log(this.state)
    }

    render(){
        return (
            <div>
                <Header logout={this.logout.bind(this)}/>
                {/* <TableComponent /> */}
                {/* 
                <Switch>
                    <Route component={PointOfSale} path="/dashboard/home"></Route>
                    <Route component={TableComponent} data path="/dashboard/ticket"></Route>
                    <Route component={PointOfSale} path="/dashboard/settings"></Route>
                </Switch> 
                */}
                <div className={ styles.container }>
                    <div className={ styles.leftContainer }>
                        <div style={ {display: "flex", alignSelf: "start", justifyItems: "start"} }>
                            <div className={ styles.tabs }>
                                <div className={ this.state.activeItem === 'Repair'?styles.tabsActive:"" } onClick={this.showSubMenu.bind(this,'Repair')}>
                                    <img src={ bug } />
                                    Repair
                                </div>
                                <div className={ this.state.activeItem === 'Products'?styles.tabsActive:"" } onClick={this.showSubMenu.bind(this,'Products')}>
                                    <img src={ square } />
                                    Products
                                </div>
                            </div>
                        </div>
                        {
                            this.state.activeItem === 'Repair' &&
                            <div style={{ height:"66vh",width:"100%",backgroundColor:"#ffffff" }}>
                                <div style={ { paddingLeft:"50px",paddingTop:"8px",paddingBottom:"10px",paddingRight:"50px",borderTop:"1px solid #d9d9d9",borderBottom:"1px solid #d9d9d9" } }>
                                    <AutoComplete DropDownData={["A","AA","AAA","AAAAA","ABBBA"]} defaultText={"Enter Product"} name="AutocompletePointOfSale"/>                  
                                </div>
                                <div style={{ height:"100%",width:"100%",backgroundColor:"#ffffff" }}>
                                    <div style={ { display:"flex",paddingLeft:"10px",paddingTop:"8px",paddingBottom:"10px",paddingRight:"50px",borderBottom:"1px solid #d9d9d9" } }>
                                        <div className={ styles.categoryWorking }><div>Hello</div></div>
                                        <div className={ styles.category }><div>Hello</div></div>
                                        <div className={ styles.category }><div>Hello</div></div>
                                        <div className={ styles.category }><div>Hello</div></div>
                                    </div>
                                    <div style={{ display:"flex", flexWrap:"wrap",padding: "20px",height:"51vh",overflowY: "scroll", boxShadow: "0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04)" }}>
                                        <div className={styles.vertical}>
                                            <img src={ square } style={{ backgroundColor:"#c0c4cc",width:"90%",margin:"5%",marginBottom:"0px",borderRadius:"5px" }} />
                                            <div>
                                                <span style={{ fontSize:"12px",paddingLeft:"5%" }}>hello</span>
                                                <img src={ image } style={{ width:"18px",height:"18px",float:"right",marginRight:"5%",marginTop:"2%"}}/> 
                                            </div>
                                            <span style={{width:"90%",margin:"5%",marginTop:"8%",}}>Price: <span style={{ float:"right" }}>$25</span></span>    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            this.state.activeItem === 'Products' &&
                            <div>
                                <div style={ { paddingLeft:"50px",paddingTop:"8px",paddingBottom:"10px",paddingRight:"50px",borderTop:"1px solid #d9d9d9",borderBottom:"1px solid #d9d9d9" } }>
                                    <AutoComplete DropDownData={["A","AA","AAA","AAAAA","ABBBA"]} defaultText={"Enter Product"} name="AutocompleteTicket"/>                  
                                </div>
                                <div>
                                    <AutoComplete DropDownData={["A","AA","AAA","AAAAA","ABBBA"]} defaultText={"Enter Product"} name="AutocompletePointOfSale"/>                  
                                </div>
                            </div>
                        }
                    </div>
                    <div className={ styles.rightContainer }>

                    </div>
                </div>
            </div>
        )
    }
} 

