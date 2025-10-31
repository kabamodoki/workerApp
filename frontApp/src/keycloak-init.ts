import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080', // KeycloakのURL
        realm: 'attendance-realm',    // 作成したRealm名
        clientId: 'attendance-client' // 作成したClient ID
      },
      initOptions: {
        onLoad: 'login-required',     // ログイン必須
        checkLoginIframe: false       // iframeチェック無効（開発用）
      }
    });
}
