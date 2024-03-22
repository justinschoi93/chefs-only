import configJson from './auth_config.json';

export function getConfig() {
    const audience = 
        configJson.audience && configJson.audience !== "U9oGzrxyr-6UI66Vr2jwTpZK97mKcL0WbTMCZ5EGt5Zifv90w5B8IxWyDtCgYhOd"
        ? configJson.audience 
        : null;

    return {
        domain: configJson.domain,
        clientId: configJson.clientId,
        ...(audience ? {audience} : null)
    }
}



