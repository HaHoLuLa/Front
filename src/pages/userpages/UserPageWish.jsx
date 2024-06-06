import "../../styles/UserPageWish.css"

function UserPageWish() {
    return (
        <main>
            <p class="UserPageName">마이페이지</p>
            <div class="UserPageContainer">
                <div class="UsetPageLeftC">
                    <div class="UserProfileC">
                        <div class="UserProfileImg">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ483Wq5A8uE8bxH4OqzfreSfUmH_GF72wSw&s" />
                        </div>
                        <p>이름</p>
                        <a href="">프로필 설정</a>
                    </div>

                    <div class="UserPageNev">
                        <a>계정</a>
                        <a>예약내역</a>
                        <a class="UserPageNow">위시리스트</a>
                        <a>최근 본</a>
                    </div>
                </div>

                <div class="UsetPageRightC">
                    <div class ="UsetPageRightCC">
                        <div class="UsetPageWishBox1">
                            <div class="UsetPageWishBoxTop">
                                <img class="UsetPageWishImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ483Wq5A8uE8bxH4OqzfreSfUmH_GF72wSw&s" />
                            </div>
                            <div class="UsetPageWishBoxBot">
                                <p class="UsetPageWishName">안되네 호텔</p>
                                <p class="UsetPageWishStar">✩✩✩✩✩</p>
                                <p class="UsetPageWishMoney">15,881,588</p>
                            </div>
                        </div>

                        <div class="UsetPageWishBox1">
                            <div class="UsetPageWishBoxTop">
                                <img class="UsetPageWishImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ483Wq5A8uE8bxH4OqzfreSfUmH_GF72wSw&s" />
                            </div>
                            <div class="UsetPageWishBoxBot">
                                <p class="UsetPageWishName">안되네 호텔</p>
                                <p class="UsetPageWishStar">✩✩✩✩✩</p>
                                <p class="UsetPageWishMoney">15,881,588</p>
                            </div>
                        </div>

                        <div class="UsetPageWishBox0">
                            <div class="UsetPageWishBoxTop">
                                <img class="UsetPageWishImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ483Wq5A8uE8bxH4OqzfreSfUmH_GF72wSw&s" />
                            </div>
                            <div class="UsetPageWishBoxBot">
                                <p class="UsetPageWishName">안되네 호텔</p>
                                <p class="UsetPageWishStar">✩✩✩✩✩</p>
                                <p class="UsetPageWishMoney">15,881,588</p>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </main>
    )
}
    
export default UserPageWish;