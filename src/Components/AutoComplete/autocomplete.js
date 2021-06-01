import React from 'react'
import styles from "./autocomplete.module.css";
import loupe from "../../assets/headerIcons/loupe.svg"


export default class AutoComplete extends React.Component{
    
    state = {
        loggedIn: false
      }

    Data = this.props.DropDownData;

    defaultText = this.props.defaultText || "Search"
    

    autocomplete(inp, arr) {
        var currentFocus;
        inp.addEventListener("input", function(e) {
            console.log("hello")
            var a, b, i, val = this.value;
            closeAllLists();
            if (!val) { return false;}
            currentFocus = -1;
            a = document.createElement("DIV");
            // a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("name", "autocomplete-data");
            a.setAttribute("class", styles.autocompleteItems);
            this.parentNode.appendChild(a);
            for (i = 0; i < arr.length; i++) {
              if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                b = document.createElement("DIV");
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                    b.addEventListener("click", function(e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                a.appendChild(b);
              }
            }
        });
        inp.addEventListener("keydown", function(e) {
            //console.dir(arr)
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
              currentFocus++;
              addActive(x);
            } else if (e.keyCode == 38) { //up
              currentFocus--;
              addActive(x);
            } else if (e.keyCode == 13) {
              e.preventDefault();
              if (currentFocus > -1) {
                if (x) x[currentFocus].click();
              }
            }
        });
        function addActive(x) {
          if (!x) return false;
          removeActive(x);
          if (currentFocus >= x.length) currentFocus = 0;
          if (currentFocus < 0) currentFocus = (x.length - 1);
          x[currentFocus].classList.add("autocomplete-active");
        }
        function removeActive(x) {
          for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
          }
        }
        function closeAllLists(elmnt) {
          var x = document.getElementsByName("autocomplete-data");
                for (var i = 0; i < x.length; i++) {
                    if (elmnt != x[i] && elmnt != inp) {
                    x[i].parentNode.removeChild(x[i]);
                }
            }
        }
        document.addEventListener("click", function (e) {
            closeAllLists(e.target);
        });
    } 


    render(){
        return (
            <div className={ styles.searchBox } >
                <div className={ styles.autocomplete } >
                    <input id="autocompleteData" type="text" name={this.props.name} className={ styles.search } placeholder={this.defaultText} />
                </div>
                <img alt="" className={ styles.icon } style={ { marginLeft:"95%" } } src= { loupe } />
            </div>                                
        )
    }
    componentDidMount(){
        // console.log(document.getElementsByName(this.props.name)[0])
        this.autocomplete(document.getElementsByName(this.props.name)[0], this.Data);
    }
} 

