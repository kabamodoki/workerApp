# 勤怠管理システム（試作）

このプロジェクトは、Angular + Spring Boot + PostgreSQL + Keycloak を使った勤怠管理システムの試作です。Dockerで構成されており、ローカル開発環境で動作します。

## 構成

- `frontend`：Angularによるフロントエンド
- `api`：Spring BootによるバックエンドAPI
- `db`：PostgreSQL
- `keycloak`：認証・認可サービス
- `nginx`：リバースプロキシ（未設定）

## 起動方法

```bash
docker-compose up
```

## Keycloak設定手順

1. 管理画面にアクセス  
   `http://localhost:8080` にブラウザでアクセス

2. 管理者ログイン  
   ユーザー名：`admin`  
   パスワード：`admin`

3. Realmの作成  
   - 名前：`attendance-realm`

4. Clientの作成  
   - Client ID：`attendance-client`  
   - Root URL：`http://localhost:4200`  
   - Access Type：`public`  
   - Valid Redirect URIs：`http://localhost:4200/*`  
   - Web Origins：`*`

5. ユーザーの作成  
   - 任意のユーザー名とパスワードを設定  
   - 必要に応じてロールを追加
