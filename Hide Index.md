----VHost section----

<VirtualHost *:80>
    ServerName  test.nitish.com
    DocumentRoot "/Applications/XAMPP/htdocs/test-app/web"
    SetEnv APPLICATION_ENV "DEV"
    <Directory "/Applications/XAMPP/htdocs/test-app/web">
        DirectoryIndex index.php
        AllowOverride All
        Order allow,deny
        Allow from all
        Require all granted
    </Directory>
</VirtualHost>

----.htaccess--------

RewriteEngine on

<FilesMatch ".(eot|ttf|otf|woff)">
    Header set Access-Control-Allow-Origin "*"
</FilesMatch>

# If a directory or a file exists, use it directly
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
# Otherwise forward it to index.php
RewriteRule . index.php


----Url Manager------

'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            'rules' => [
            
            ],
    ],

