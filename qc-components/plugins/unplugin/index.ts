import { ComponentResolver } from "unplugin-vue-components/types";
import { ResolverConfiog } from "../types";

const ComponentsMap: Record<string, string> = {
	EasyTable: "@pqcqcqc/qc-components/lib/easy-table",
	ManagePage: "@pqcqcqc/qc-components/lib/manage-page",
	DynamicForm: "@pqcqcqc/qc-components/lib/dynamic-form",
};

const Resolver: ComponentResolver = (name) => {
	if (name in ComponentsMap) {
		return {
			as: name,
			from: ComponentsMap[name],
		};
	}
	return null;
};

const QcComponentsResolver = (config?: ResolverConfiog) => Resolver;

export default QcComponentsResolver;
