class Blog {
    constructor(){
        this.setInitVariables();
        this.registerEvent();
        this.likedSet = new Set();
    }

    setInitVariables(){
        this.blogList = document.querySelector("#blogList");
    }

    registerEvent(){
        /*블로그 버튼을 클릭 했을 때 실행*/
        const startBtn = document.querySelector("#blogBtn");
        startBtn.addEventListener("click",()=>{
            const dataUrl = "/data/data.json";
            this.setInitData(dataUrl);


            
        });

        /*찜하기 버튼 클릭 했을 때 실행*/
        this.blogList.addEventListener("click", ({target})=>{
            const evtClassName = target.className;
            if(evtClassName !== "like" && evtClassName !== "unlike") return;
            const title = target.previousElementSibling.textContent;
            switch(evtClassName){
                case "like": 
                    /*찜 목록에 likedSet 목록 내용 추가*/
                    target.textContent="싫어요";
                    target.className="unlike";
                    this.likedSet.add(title);
                    break;

                case "unlike" : 
                target.textContent="찜하기";
                target.className="like";
                this.likedSet.delete(title);
                break;
                    
                }
            this.updateLikedList();
            //previousElementSibling = 이전 형제 노드
            //textContent = 텍스트

            
            
        });
    }//registerEvent()

    updateLikedList(){
        const likeList = document.querySelector("#likeList > ul");
        likeList.innerHTML = "";
        this.likedSet.forEach(v=>{
            likeList.innerHTML += `<li>${v}</li>`;
        });
    }

    setInitData(dataUrl){
        this.getData(dataUrl, this.insertPosts.bind(this));//insertPosts 함수 내에서 this가 undefined이므로 바인드 해준다.
    }

    getData(dataUrl, fn){
        const oReq = new XMLHttpRequest();

        oReq.addEventListener("load", ()=>{
            const list = JSON.parse(oReq.responseText);
            // console.log("list is ",list);
            let {body}=list;
            fn(body);
        });

        oReq.open('GET',dataUrl);
        oReq.send();
    }

    insertPosts(list){

        // debugger; //자바스크립트에서 멈추고 변수 상태 등을 확인할 때 사용
        this.blogList.innerHTML = ""; 
        list.forEach( v => {
            const templet = `
                <div>
                    <div>
                        <a href='${v.link}' target='_blank'>${v.title}</a>
                    </div>
                    <div class='like'>찜하기</div>
                </div>`;
            blogList.innerHTML += templet;
        });

    }
}

export default Blog;