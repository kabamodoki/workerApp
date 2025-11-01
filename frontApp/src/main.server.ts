import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import 'zone.js/node';
import { AppComponent } from './app.component'; // ← src直下にあるならこのパス！

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(AppComponent, {
        providers: [
            // サーバー側で必要なプロバイダーがあればここに追加
        ],
    }, context);

export default bootstrap;