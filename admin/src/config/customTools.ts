import CheckList from "@editorjs/checklist";
import Code from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import Embed from "@editorjs/embed";
import Header from "@editorjs/header";
import InlineCode from "@editorjs/inline-code";
import LinkTool from "@editorjs/link";
import List from "@editorjs/list";
import Marker from "@editorjs/marker";
import Quote from "@editorjs/quote";
import Raw from "@editorjs/raw";
import Table from "@editorjs/table";
import Warning from "@editorjs/warning";
import ComponentSelectorTool from "editorjs-component-selector";

export const customTools = (options, config) => {
  return {
    ...(options.header
      ? {
          header: {
            class: Header,
            ...(config.header ? config.header : {}),
          },
        }
      : {}),
    ...(options.list
      ? {
          list: {
            class: List,
            ...(config.list ? config.list : {}),
          },
        }
      : {}),
    ...(options.checklist
      ? {
          checklist: {
            class: CheckList,
            ...(config.checklist ? config.checklist : {}),
          },
        }
      : {}),
    ...(options.embed
      ? {
          embed: {
            class: Embed,
            ...(config.embed ? config.embed : {}),
          },
        }
      : {}),
    ...(options.table
      ? {
          table: {
            class: Table,
            ...(config.table ? config.table : {}),
          },
        }
      : {}),
    ...(options.warning
      ? {
          warning: {
            class: Warning,
            ...(config.warning ? config.warning : {}),
          },
        }
      : {}),
    ...(options.code
      ? {
          code: {
            class: Code,
            ...(config.code ? config.code : {}),
          },
        }
      : {}),
    ...(options.link_tool
      ? {
          link_tool: {
            class: LinkTool,
            ...(config.link_tool ? config.link_tool : {}),
          },
        }
      : {}),
    ...(options.raw
      ? {
          raw: {
            class: Raw,
            ...(config.raw ? config.raw : {}),
          },
        }
      : {}),
    ...(options.quote
      ? {
          quote: {
            class: Quote,
            ...(config.quote ? config.quote : {}),
          },
        }
      : {}),
    ...(options.marker
      ? {
          marker: {
            class: Marker,
            ...(config.marker ? config.marker : {}),
          },
        }
      : {}),
    ...(options.delimiter
      ? {
          delimiter: {
            class: Delimiter,
            ...(config.delimiter ? config.delimiter : {}),
          },
        }
      : {}),
    ...(options.inlineCode
      ? {
          inlineCode: {
            class: InlineCode,
            ...(config.inlineCode ? config.inlineCode : {}),
          },
        }
      : {}),
    ...(options.component
      ? {
          component: {
            class: ComponentSelectorTool,
            ...(config.component ? config.component : {}),
          },
        }
      : {}),
  };
};
