package com.whpu;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;


@Controller
public class AjaxOne {

    @RequestMapping("hello")
    @ResponseBody
    public String hello(String name,String callback){
        String data = name + "1505110054";
        return callback + "('"+data+"')";
    }

    @RequestMapping("get")
    @ResponseBody
    public String get(Integer id){
        String[] arr = {"zhangsan","lisi","wangwu"};
        return arr[id];
    }

    @RequestMapping(value = "data")
    @ResponseBody
    public String data(HttpServletResponse response){
        response.setHeader("Access-Control-Allow-Origin","*");
        //return "字符串";
//,produces = MediaType.APPLICATION_XML_VALUE
//        String xml = "<student>" +
//                "<name>zhangsan</name>" +
//                "<age>18</age>" +
//                "<sex>mela</sex>" +
//                "</student>";
//        return xml;

        String json = "{\"name\":\"张三\",\"age\":\"18\"}";
        return json;

    }
}
