<?php
    if(!isset($_SESSION['myMemberID'])) {
        echo "<script>alert('로그인이 필요한 서비스입니다.');</script>";
        echo "<script>history.back(1);</script>";
    } 
?>