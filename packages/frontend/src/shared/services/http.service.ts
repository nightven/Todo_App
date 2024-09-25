import axios, { AxiosStatic, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getTokenFromLocalStorage } from '~/utils/getTokenFromLocalStoreage';

interface ConfigType extends AxiosRequestConfig {
	url: string;
	data?: unknown;
}

class HttpService {
	private baseUrl: string;
	private fetchingService: AxiosStatic;
	private apiVersion: string;

	constructor(
		baseUrl = process.env.BASE_URL,
		fetchingService = axios,
		apiVersion = 'api',
	) {
		this.baseUrl = baseUrl;
		this.fetchingService = fetchingService;
		this.apiVersion = apiVersion;
	}

	private getFullApiUrl(url: string): string {
		return `${this.baseUrl}/${this.apiVersion}/${url}`;
	}

	private populateTokenToHeaderConfig(): { Authorization: string } {
		return {
			Authorization: `Bearer ${getTokenFromLocalStorage()}`,
		};
	}

	private extractUrlAndDataFromConfig({
		data: _,
		url: __,
		...configWithoutDataAndUrl
	}: ConfigType): Omit<ConfigType, 'data' | 'url'> {
		return configWithoutDataAndUrl;
	}

	get<T = unknown>(
		config: ConfigType,
		withAuth = true,
	): Promise<AxiosResponse<T>> {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return this.fetchingService.get<T>(
			this.getFullApiUrl(config.url),
			this.extractUrlAndDataFromConfig(config),
		);
	}

	put<T = unknown>(
		config: ConfigType,
		withAuth = true,
	): Promise<AxiosResponse<T>> {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return this.fetchingService.put<T>(
			this.getFullApiUrl(config.url),
			config.data,
			this.extractUrlAndDataFromConfig(config),
		);
	}

	post<T = unknown>(
		config: ConfigType,
		withAuth = true,
	): Promise<AxiosResponse<T>> {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return this.fetchingService.post<T>(
			this.getFullApiUrl(config.url),
			config.data,
			this.extractUrlAndDataFromConfig(config),
		);
	}

	patch<T = unknown>(
		config: ConfigType,
		withAuth = true,
	): Promise<AxiosResponse<T>> {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return this.fetchingService.patch<T>(
			this.getFullApiUrl(config.url),
			config.data,
			this.extractUrlAndDataFromConfig(config),
		);
	}

	delete<T = unknown>(
		config: ConfigType,
		withAuth = true,
	): Promise<AxiosResponse<T>> {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return this.fetchingService.delete<T>(
			this.getFullApiUrl(config.url),
			this.extractUrlAndDataFromConfig(config),
		);
	}
}

export default HttpService;
