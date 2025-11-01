<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>ログイン - 勤怠アプリ</title>
    <link rel="stylesheet" href="${url.resourcesPath}/css/styles.css" />
  </head>
  <body>
    <div class="login-container">
      <h1>ログイン</h1>
      <form action="${url.loginAction}" method="post" class="login-form">
        <div class="form-group">
          <input type="text" name="username" placeholder="ユーザー名" />
        </div>
        <div class="form-group">
          <input type="password" name="password" placeholder="パスワード" />
        </div>
        <div class="form-group">
          <button type="submit">ログイン</button>
        </div>
      </form>
    </div>
  </body>
</html>
