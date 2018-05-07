
Add Dynamic field with validation in existing yii2 form.

```html

<div class="row">
    <div class="col-md-12 col-xs-12">
        <div class="form-group field-customer-test">
            <label class="control-label" for="customer-test">Test</label>
            <input type="text" id="customer-test" class="form-control" name="Customer[test]" maxlength="20" aria-invalid="false">
            <div class="help-block"></div>
        </div>	
    </div> 
</div>
```

```js
$('#w0').yiiActiveForm('add', {
   id: 'customer-test',
   name: 'Customer[test]',
   container: '.field-customer-test',
   input: '#customer-test',
   error: '.help-block',
   validate:  function (attribute, value, messages, deferred) {
       yii.validation.required(value, messages, {message: "Test Can't be blank"});
   }
});
```
