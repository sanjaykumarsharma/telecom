import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export interface AppConfig {
    apiEndpoint: string;
}

export const AppConfig: AppConfig = {
    apiEndpoint: 'http://www.sanjyconsultinggroup.com/slim/api'
    // apiEndpoint: 'http://localhost/slim/api'
};

