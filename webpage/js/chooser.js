/**
 * Created by twer on 2/20/14.
 */
$(document).ready(function(){
    $("button").click(function(){

        var lunch_array=["Little Yellow Chicken", "1F Restaurant","Saozi Noodles","FanJia ColdNoodles","Mao Cai","Korea Banfan","Dumplings","GuanZhong Noodles","Xi'an Fanzhuang", "Subway"]
        var num = parseInt(Math.random() * 10-1);
        alert("Congratulation! Your lunch is " + lunch_array[num]);
    });
});