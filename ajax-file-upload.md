Form:
```html
<form id="file-form"> 
	<input id="form-token" type="hidden" name="<?=Yii::$app->request->csrfParam?>"
           value="<?=Yii::$app->request->csrfToken?>"/>
	First name:<br>
	<input type="text" name="firstname" value="">
	<br>
	Last name:<br>
	<input type="text" name="lastname" value="">
	<br>
	file name:<br>
	<input id="fileId" type="file" name="file" value="" multiple>
	<br>
	<button type="submit" id="submitBtn">Submit</button>
</form>
```
Ajax Request:
```js
$(document).ready(function() {
	$('#file-form').on('submit', function(e){
		e.preventDefault();
		$.ajax({
			url: 'save-data',
			type:'POST',
			data:  new FormData(this),
			contentType: false,
			cache: false,
			processData:false,
			success:function(data) {
			  alert(data);
			}
		});
	});
});
```

Action:
```php
public function actionSaveData()
{
    $request = Yii::$app->request;
    if (Yii::$app->request->post() && Yii::$app->request->isAjax) {
        print_r($_POST);
        print_r($_FILES);
    }

}
```
