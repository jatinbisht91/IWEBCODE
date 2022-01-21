const Content1 = ({text}) => {
    return <div>
    <div className="content1">
       <div class="icons">
       <i class="fas fa-cookie"> Cake</i>
       <i class="fa-solid fa-toggle-on" > USD</i>
       </div>
       <input value={text}/>
         <div className="bottom">
            <div>
                 <button>$1000</button>
                 <button>$100</button>
            </div>
            <div>~CAKE 0.000</div>
        </div>
    </div>
    </div>;
}


export default Content1;