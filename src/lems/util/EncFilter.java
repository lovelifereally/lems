package lems.util;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

public class EncFilter implements Filter {
	private String charEncoding = null;

	public EncFilter() {
		System.out.println("编码过滤器构造函数");
	}

	public void init(FilterConfig fConfig) throws ServletException {
		System.out.println("编码过滤器_初始化方法开始");
		charEncoding = fConfig.getInitParameter("encoding");
		if (charEncoding == null) {
			throw new ServletException("编码设置为空");
		}
		System.out.println("编码过滤器_初始化方法结束");
	}

	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		System.out.println("编码过滤器__doFilter()开始");
		/* 2.判断请求编码和配置编码是否一致 */
		if (!charEncoding.equals(request.getCharacterEncoding())) {
			request.setCharacterEncoding(charEncoding);
		}
		chain.doFilter(request, response);
		System.out.println("编码过滤器__doFilter()结束");
	}

	public void destroy() {
		System.out.println("编码过滤器__destroy()");
	}
}
