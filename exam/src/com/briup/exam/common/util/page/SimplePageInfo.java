package com.briup.exam.common.util.page;

import java.util.List;
import com.briup.exam.common.util.IPageInfo;

public class SimplePageInfo<T> implements IPageInfo {
	private List<T> models;

	public SimplePageInfo() {
	}

	// public SimplePageInfo(HttpServletRequest request) {
	// this.currentPage = WebUtil.getParameter(request, "pageNo", 0);
	// }

	public List<T> getModels() {
		return models;
	}

	public void setModels(List<T> models) {
		this.models = models;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	private int currentPage = 0;// 当前页码
	private long totalCount;// 总条数
	private int pageSize = 3;// 每页显示的大小
	private int offset;
	private int pageCount;// 页数

	public int getPageNo() {
		return currentPage;
	}

	public void setPageNo(int currentPage) {
		this.currentPage = currentPage;
	}

	public long getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(long totalCount) {
		this.totalCount = totalCount;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getPageCount() {
		//向上浮动取整数   总条数除以每页所能显示的最大条数   得到页数
		pageCount = (int) Math.ceil((0.0 + this.totalCount) / this.pageSize);
		return pageCount;
	}

	//从第几条开始查
	public int getOffset() {
		if (offset != 0) {
			return offset;
		}
		return this.pageSize * this.currentPage;
	}

	public void setOffset(int offset) {
		this.offset = offset;
	}
}
