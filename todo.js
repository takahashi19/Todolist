alert("こんにちは！");
alert(111 + 222);

/*
//【サブ課題１】まずはinputタグに入力された文字列を
// タスクとして追加する処理を作成してみましょう!!
*/ 

//１．<iuput>タグを取得する
//ヒント：document.getElementByID()という関数を調べてみましょう

//２．<tbody>タグを取得する

//３．<tr>タグと<td>タグを新たに作成する
//ヒント：document.createElement()という関数を調べてみましょう
var trElement = document.createElement('tr');

//４．取得したinputタグの文字列を３で生成した<td>タグのテキストに代入する
//ヒント：inputタグのvalue属性に、入力した文字列が格納されています
//ヒント：.valueとtextContentを調べてみましょう

//５．<tr>タグの子要素に<td>タグを追加する
//ヒント：appendChild()という関数について調べてみましょう。

//６：２で取得した<tbody>タグの子要素に先ほどの<tr>タグを追加する