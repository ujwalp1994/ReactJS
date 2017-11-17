import React, { Component } from 'react';
import YouTube from 'react-youtube';

class MyContent extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { 
        autoplay: 0
      }
    };
    return (
      <div id="middle" className="col">
    <h3>John Cena Fan Club page, YOU CAN'T SEE ME!!</h3>
        <div class="content">
          <article class="topcontent" id="first">
            <header>
              <h4> John Cena celebrates his historic 16th World Title win with a Make-A-Wish member</h4>
            </header>
            <footer>
              <p class="post-info">12-06-2017</p>
            </footer>
            <content>
             <p>After defeating AJ Styles at Royal Rumble 2017 to become a 16-time World Champion, John Cena entered the crowd to celebrate with a Make-A-Wish member of the WWE Universe.
             More ACTION on WWE NETWORK : http://wwenetwork.com</p>
            </content>
          </article>
          <article class="bottomcontent" id="second">
            <header>
              <h4>Start of John Cena career</h4>
            </header>
            <footer>
              <p class="post-info">15-09-2017</p>
            </footer>
        
            <content>
              <p>Cena began his wrestling career with Ultimate Pro Wrestling, an independent wrestling promotion in California that lasted from 1999 until 2007. Cena’s first alter-ego was introduced as The Prototype… “half-man, half-machine, a hundred percent mayhem.” He won the UPW heavyweight title in April of 2000, holding it for about a month.8. Cena got his start with WWE later that year, signing a contract with its developmental company, Ohio Valley Wrestling (OVW). After winning the OVW heavyweight title in 2002, he finally made his official WWE TV debut on the SmackDown circuit that June. He had previously appeared in dark matches for WWE.</p>
            </content>
          </article>
          <article class="bottomcontent" id="third">
            <header>
              <h4> Craziest Knockouts</h4>
            </header>
            <footer>
              <p class="post-info">20-11-2017</p>
            </footer>
        
            <content>
              <YouTube id="vid"
                videoId="vTwe2Cih3fw"
                opts={opts}
                onReady={this._onReady}/>
            </content>
          </article>
      </div>
    </div>
    );
  }
}


export default MyContent;